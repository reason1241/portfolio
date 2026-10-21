# Myeongsun Choi — Portfolio

A single-page portfolio built with React and Vite. Content lives in `src/App.jsx`; responsive layout and print styles live in `src/styles.css`.

## Local development

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run preview
```

## GitHub Pages

The included workflow builds on pushes to `main` and publishes **only `dist/client`**. In Settings → Pages, select **GitHub Actions** as the source. Set the custom domain to `portfolio.mschoi.com`, then configure the `portfolio` DNS CNAME to `reason1241.github.io`, and enable HTTPS once GitHub verifies the domain. The domain is also recorded in `public/CNAME` for reference; Actions deployments use the domain in repository settings, not that file. Relative asset paths support both the repository URL and custom domain. Local work does not publish the site. See [custom domain setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) and [Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Search visibility

`index.html` contains `noindex, nofollow`. Crawlers can fetch HTML to read that directive. It requests exclusion from supporting search indexes; it does not make the site private or prevent scraping and sharing.

`public/resume.pdf` is a public copy of the SWE resume. `robots.txt` asks crawlers not to fetch it, but HTML `noindex` does not apply to PDFs, and robots exclusions cannot guarantee the PDF URL stays out of search. GitHub Pages does not provide per-file custom response headers. For stronger exclusion, remove the hosted PDF or use hosting with an `X-Robots-Tag` header for it. Replace this PDF when updating the resume.

The source slide deck and its URL are deliberately excluded. Google Analytics is configured in `index.html` with measurement ID `G-J72GWKQZDL`. No external fonts are included.
