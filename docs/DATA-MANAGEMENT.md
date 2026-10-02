# Property data management

## Authoritative register

`data/union-street-units.csv` is the editable property register used by the
published map. Each row represents one mapped frontage or unit.

The `unit_id` is the permanent link to the shape on the map. Never change,
reuse, or delete an existing `unit_id` as part of a routine information update.

## Routine update

1. Confirm the change from a suitable source.
2. Find the existing row by address and `unit_id`.
3. Change only the fields that need updating.
4. Set `verified` to `TRUE` when the information has been checked.
5. Record `verification_date` as `YYYY-MM-DD`.
6. Add a concise `source_note` without including confidential information.
7. Save as UTF-8 CSV, keeping the existing column headings.
8. Run `node scripts/validate-data.mjs`.
9. Preview the site locally and inspect the changed unit, status totals, and
   details panel.
10. Commit the update on a branch, open a pull request, and have a second person
    review it before merging to `main`.

GitHub Pages republishes automatically after the change reaches `main`. If an
incorrect change is published, revert the relevant GitHub commit.

## Status values

Only the following exact values are accepted:

| CSV value | Map label | Reporting group |
|---|---|---|
| `occupied` | Occupied | All Occupied |
| `filled` | Occupied: Filled | All Occupied |
| `occupied-to-let` | Occupied: To Let | All Occupied |
| `available` | Vacant: To Let | All Vacant |
| `not-on-market` | Vacant: Not on Market | All Vacant |
| `being-occupied` | Vacant: Being Filled | All Vacant |

Do not enter alternatives such as `vacant`, `to let`, or capitalised versions.

## Fields

| Column | Editing rule |
|---|---|
| `unit_id` | Permanent technical identifier; do not alter. |
| `parent_building_id` | Technical link; change only with a map geometry update. |
| `osm_id` | OpenStreetMap reference; change only after mapping review. |
| `address` | Public display address. |
| `occupant` | Current occupier or an agreed vacant-unit label. |
| `status` | One of the six controlled values above. |
| `rateable_value` | Number; currency symbols and commas are accepted. |
| `area_sq_ft` | Number in square feet. |
| `annual_rates` | Number; currency symbols and commas are accepted. |
| `annual_rent` | Number; currency symbols and commas are accepted. |
| `arr_per_sq_ft` | Number; currency symbols and commas are accepted. |
| `uprn` | Unique Property Reference Number, where known. |
| `verified` | `TRUE` or `FALSE`. |
| `verification_date` | Use `YYYY-MM-DD`, or leave blank if unverified. |
| `source_note` | Concise evidence or maintenance note suitable for publication. |

Blank financial fields display as not recorded. Do not put commentary such as
`unknown` into numeric fields; leave them blank and explain in `source_note`.

## Structural changes

Adding, removing, splitting, combining, or reshaping a mapped unit is not a
routine CSV update. It requires coordinated changes to the relevant
`union-street-*.js` geometry file and the CSV register. A new CSV row cannot
create a map shape by itself.

Do not delete a row simply because a unit closes. Update its occupant, status,
verification fields, and source note instead. Escalate genuine unit removal or
boundary changes for a technical map update.

## Data protection

Everything committed to this repository should be treated as public. Do not
record personal contact details, private correspondence, credentials, or other
confidential information in the register, source notes, commit messages, or
pull-request discussion.
