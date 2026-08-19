# Agent notes for malikhartford.com

Static GitHub Pages site from the `main` branch, root `/`. Custom domain: https://malikhartford.com/

## When you add a page

1. Add the public file where GitHub Pages will serve it.
2. Update `robots.txt` if the URL should be crawled or blocked (`Allow` / `Disallow`).
3. Add the URL and a one-line description to `llms.txt` (the AI-facing index, similar to robots.txt).
4. Add the URL to `sitemap.xml`. Keep the `Sitemap:` line in `robots.txt` pointing at https://malikhartford.com/sitemap.xml.

## Do not

- Reintroduce Bootstrap.
- Put Ohio State in the title, Open Graph, or JSON-LD identity fields.
