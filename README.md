# BAI Digital - Landing Page

This project is a static website built using ViteJS with server-side rendering (SSR) for better SEO and performance. The SSR solution is based on the Vite's built-in support for SSR.

## Development

To run the project in development mode, use the following command:

```
npm run dev
```

## Building and Generating Static Files for Production

To build the project for production, use the following command:

```
npm run build
```

This will generate a `dist/client` folder with the static assets and pre-rendered HTML files for each route defined in `prerender.js`.

## Deployment on Azure Static Web Apps
- Check ViteJS guide: [https://vitejs.dev/guide/static-deploy.html#azure-static-web-apps](https://vitejs.dev/guide/static-deploy.html#azure-static-web-apps).
- The file `./.github/workflows/azure-static-web-apps-blue-beach-035ea6503.yml` is a Github Action script for Azure Static Web Apps deployment.
- The file `./.github/workflows/main.yml` is a Github Action script for Github Pages deployment.

## Server-Side Rendering Solution

### Important Files

- `src/App.tsx`: Exports environment-agnostic (universal) app code.
- `src/entry-client.jsx`: Mounts the app to a DOM element.
- `src/entry-server.jsx`: Renders the app using the framework's SSR API.
- `prerender.js`: The script responsible for rendering and saving the static HTML files for each route.

### Scripts in package.json

- `dev`: Runs Vite in development mode.
- `build`: Builds the project for production, including both client-side and server-side bundles.
- `build:client`: Builds the client-side bundle.
- `build:server`: Builds the server-side bundle for SSR.
- `generate`: Generates static HTML files for each route defined in `prerender.js` and places them in the `dist/static` folder.
- `preview`: Runs the Vite preview server.

### How to Modify

- If you need to modify the SSR process or customize the output, update the `prerender.js` script and the corresponding entry points (`src/entry-client.jsx` and `src/entry-server.jsx`).
