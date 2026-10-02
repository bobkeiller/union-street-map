import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const csvPath = resolve(projectRoot, 'data/union-street-units.csv');
const expectedHeaders = [
  'unit_id', 'parent_building_id', 'osm_id', 'address', 'occupant', 'status',
  'rateable_value', 'area_sq_ft', 'annual_rates', 'annual_rent',
  'arr_per_sq_ft', 'uprn', 'verified', 'verification_date', 'source_note'
];
const statuses = new Set([
  'occupied', 'filled', 'occupied-to-let', 'available', 'not-on-market',
  'being-occupied'
]);
const numericFields = [
  'rateable_value', 'area_sq_ft', 'annual_rates', 'annual_rent', 'arr_per_sq_ft'
];

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = '';
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    if (quoted) {
      if (character === '"' && text[index + 1] === '"') {
        value += '"';
        index += 1;
      } else if (character === '"') quoted = false;
      else value += character;
    } else if (character === '"') quoted = true;
    else if (character === ',') {
      row.push(value);
      value = '';
    } else if (character === '\n') {
      row.push(value.replace(/\r$/, ''));
      rows.push(row);
      row = [];
      value = '';
    } else value += character;
  }
  if (quoted) throw new Error('The CSV ends inside a quoted value.');
  if (value || row.length) {
    row.push(value.replace(/\r$/, ''));
    rows.push(row);
  }
  return rows;
}

const text = await readFile(csvPath, 'utf8');
const rows = parseCsv(text);
if (rows.length < 2) throw new Error('The property register contains no data rows.');

const headers = rows[0].map((value, index) =>
  index === 0 ? value.replace(/^\ufeff/, '') : value
);
const errors = [];
if (headers.join('\u0000') !== expectedHeaders.join('\u0000')) {
  errors.push(`Header row must be exactly: ${expectedHeaders.join(',')}`);
}

const records = rows.slice(1).filter(row => row.some(value => value.trim() !== ''));
const ids = new Set();
for (const [offset, row] of records.entries()) {
  const line = offset + 2;
  if (row.length !== expectedHeaders.length) {
    errors.push(`Line ${line}: expected ${expectedHeaders.length} columns, found ${row.length}.`);
    continue;
  }
  const record = Object.fromEntries(expectedHeaders.map((header, index) => [header, row[index].trim()]));
  if (!record.unit_id) errors.push(`Line ${line}: unit_id is required.`);
  else if (ids.has(record.unit_id)) errors.push(`Line ${line}: duplicate unit_id "${record.unit_id}".`);
  else ids.add(record.unit_id);
  if (!record.status) errors.push(`Line ${line}: status is required.`);
  else if (!statuses.has(record.status)) errors.push(`Line ${line}: invalid status "${record.status}".`);
  if (record.verified && !/^(true|false)$/i.test(record.verified)) {
    errors.push(`Line ${line}: verified must be TRUE or FALSE.`);
  }
  if (record.verification_date && !/^\d{4}-\d{2}-\d{2}$/.test(record.verification_date)) {
    errors.push(`Line ${line}: verification_date must use YYYY-MM-DD.`);
  }
  for (const field of numericFields) {
    if (!record[field]) continue;
    const number = Number(record[field].replace(/[£,]/g, '').trim());
    if (!Number.isFinite(number)) errors.push(`Line ${line}: ${field} must be numeric or blank.`);
  }
}

if (errors.length) {
  console.error(`Property register validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  const totals = Object.fromEntries([...statuses].map(status => [
    status,
    records.filter(row => row[expectedHeaders.indexOf('status')].trim() === status).length
  ]));
  console.log(`Property register valid: ${records.length} unique units.`);
  console.log(Object.entries(totals).map(([status, count]) => `${status}: ${count}`).join(' | '));
}
