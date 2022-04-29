// Pre-render the app into static HTML.
// run `yarn generate` and then `dist/static` can be served as a static site.

import { readFileSync, readdirSync, writeFileSync } from "fs";
import { resolve } from "path";

const toAbsolute = (p) => resolve(__dirname, p);

const template = readFileSync(toAbsolute("dist/static/index.html"), "utf-8");
import { render } from "./dist/server/entry-server.tsx";

// determine routes to pre-render from src/pages
const routesToPrerender = readdirSync(toAbsolute("src/pages"))
  .map((file) => {
    const name = file.replace(/\.tsx$/, "").toLowerCase();
    return name === "home" ? `/` : `/${name}`;
  });

(async () => {
  // pre-render each route...
  for (const url of routesToPrerender) {
    const context = {};
    const appHtml = await render(url, context);

    const html = template.replace(`<!--app-html-->`, appHtml);

    const filePath = `dist/static${url === "/" ? "/index" : url}.html`;
    writeFileSync(toAbsolute(filePath), html);
    console.log("pre-rendered:", filePath);
  }
})();
