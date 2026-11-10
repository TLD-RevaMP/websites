# Websites

The two TLD RevaMP websites. Both are plain HTML and CSS, with no build step.

| Folder | Site |
| --- | --- |
| `tldrevamp.com/public/` | https://tldrevamp.com — the TLD RevaMP page: download, install, multiplayer |
| `thelongdrive.dev/public/` | https://thelongdrive.dev — the community page, pointing to tldrevamp.com |
| `tldrevamp.com/www-redirect/` | sends www.tldrevamp.com to tldrevamp.com |

## Editing

Change the files under a site's `public/` folder, on github.com or in a clone, and push to `main`. Cloudflare publishes
that site within a minute or two. A push to any other branch gets a preview link from Cloudflare instead, so a change
can be looked at before it goes to `main`.

To look at a site on your own machine, serve its `public/` folder, for example:

    python -m http.server 8418 --directory tldrevamp.com/public

Things to keep in mind:

- After changing `style.css`, raise the `?v=` number where the pages link it, or browsers keep showing the old style.
- After changing a page's text, update its `<lastmod>` in `tldrevamp.com/public/sitemap.xml`.
- Keep `889787f67193fb532628e0b71b513792.txt` (the IndexNow key) and the icon files where they are.
- Both sites are unofficial and say so on every page; keep that line.

## Publishing

Each folder with a `wrangler.jsonc` is one Cloudflare Worker, connected to this repo through Cloudflare's Workers
Builds: root directory = that folder, no build command, deploy command `npx wrangler deploy`, watching only that
folder's paths.

## Licence

The websites' text and design are all rights reserved (see each site's `LICENSE`). TLD RevaMP itself is GPL-3.0:
https://github.com/TLD-RevaMP/TLD-RevaMP.
