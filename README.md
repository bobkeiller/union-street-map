# Union Street Map

Self-contained static website for the Union Street property map. It is ready to
be placed in its own GitHub repository and published with GitHub Pages.

## Preview locally

The page must be served over HTTP so that the browser can load the CSV file.
From this folder, run:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Update property information

Edit `data/union-street-units.csv`, keeping each existing `unit_id` unchanged.
Before publishing, run:

```sh
node scripts/validate-data.mjs
```

See `docs/DATA-MANAGEMENT.md` for the full editing and approval process.

## Publish with GitHub Pages

1. Create a public GitHub repository named `union-street-map`.
2. Upload or push the contents of this folder. The files in this folder must be
   at the repository root, rather than inside another `union-street-map` folder.
3. In **Settings > Pages**, choose **Deploy from a branch**, `main`, and
   `/(root)`.
4. In **Settings > Pages > Custom domain**, enter
   `ouraberdeendata.co.uk`.
5. Configure the domain's DNS for GitHub Pages, then enable **Enforce HTTPS**.

The included `CNAME` file preserves the custom-domain setting on subsequent
publishes. The GitHub workflow validates the CSV whenever a change is pushed or
a pull request is opened.

## Main files

- `index.html` — map application.
- `data/union-street-units.csv` — editable property register.
- `union-street-*.js` — map geometry and linked mapping records.
- `scripts/validate-data.mjs` — property-register validation.
- `docs/DATA-MANAGEMENT.md` — maintenance procedure and field definitions.

The MapLibre library and the map background are loaded from third-party web
services, so the published map requires an internet connection.
