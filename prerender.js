// Pre-render the app into static HTML.
// run `yarn generate` and then `dist/static` can be served as a static site.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import solutions from "./src/data/solutions.json" assert { type: "json" };

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute("dist/static/index.html"), "utf-8");
const { render } = await import("./dist/server/entry-server.js");

// determine routes to pre-render from src/pages
const routes = [
  "/",
  ...solutions.map((solution) => `/solutions/${solution.id}`),
  "/404",
];

(async () => {
  // pre-render each route...
  for (const url of routes) {
    const context = {};
    const appHtml = await render(url, context);

    const html = template.replace(`<!--app-html-->`, appHtml);

    const filePath = `dist/static${url === "/" ? "/index" : url}.html`;

    // Create necessary directories
    const dirPath = path.dirname(toAbsolute(filePath));
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Write the file
    fs.writeFileSync(toAbsolute(filePath), html);
    console.log("pre-rendered:", filePath);
  }
})();
