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
7. For a vacant property, add an optional public-facing `note` when useful.
8. For a vacant or `occupied-to-let` property, add the `letting_agent` when
   known.
9. Where available, add the agent's property-specific webpage in
   `letting_agent_url`.
10. Keep `closure` as `yes` for a unit that has closed since March 2023, even if
   it has subsequently been filled.
11. Save as UTF-8 CSV, keeping the existing column headings.
12. Double-click `Publish Unit Updates.command` in Finder.
13. Review the validation result and the displayed changes.
14. Enter a concise description and confirm publication.
15. After GitHub Pages deploys, inspect the changed unit, status totals, and
    details panel on the live site.

The publishing command commits and pushes only `data/union-street-units.csv`.
Other uncommitted project work is not included. For a formal second-person
approval process, use a branch and pull request instead of the direct command.

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
| `note` | Optional public-facing note shown only in vacant-property pop-ups. |
| `letting_agent` | Letting agent shown for vacant and `occupied-to-let` properties. |
| `closure` | `yes` if the unit has closed since March 2023; otherwise `no`. |
| `letting_agent_url` | Optional link to the agent's webpage for that specific property. |

Blank financial fields display as not recorded. Do not put commentary such as
`unknown` into numeric fields; leave them blank and explain in `source_note`.

Keep `note` concise and suitable for the public website. Use it for information
that helps explain a vacancy, such as refurbishment or marketing context. Leave
it blank for occupied properties and when there is nothing useful to add.

Enter the public-facing business name in `letting_agent`. Leave it blank when
the agent is unknown. The pop-up will display “Not recorded” in that case.

Enter the full public `https://` property-listing address in `letting_agent_url`.
Use a property-specific page rather than the agent's general homepage, and leave
the field blank when no suitable listing is available.

The `closure` flag is permanent historical information. Do not change it back
to `no` when a unit is filled. The Project Progress panel calculates the March
2023 comparison as follows:

```text
Occupied then = Occupied now - Filled + Closures
Vacant then   = Vacant now + Filled - Closures
```

A unit that closed and was later filled is counted in both measures, so those
two changes cancel when reconstructing the March 2023 occupied/vacant totals.

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
