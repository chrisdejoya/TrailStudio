# TrailStudio

TrailStudio is a browser-based 3D controller visualizer for gamepad input, model previews, lighting, trails, and scene presets.

## Development

Install dependencies and create the browser bundle:

```sh
npm install
npm run build
```

Serve the project from a local HTTP server and open `index.html`. A local server is required for model loading, module assets, and browser storage APIs.

The release entrypoint is `index.html`, which loads the generated `js/app.bundle.js`. Source code is organized by responsibility:

- `js/entry.js` is the bundle entrypoint.
- `js/app.js` coordinates the scene, managers, and UI bindings.
- `js/core/` contains shared state and persistence adapters.
- `js/managers/` owns gamepad, model, lighting, trail, and diagnostics behavior.
- `js/rendering/` owns Three.js rendering and post-processing.
- `js/ui/` owns browser controls and integration bridges.

## Quality checks

Run the production build after source changes:

```sh
npm run check
```

The generated bundle and source map are checked in because the application is also usable as a static site. Do not edit either generated file directly; update the source modules and run the build.

## Browser support

Use a current Chromium-based browser for the complete feature set, including WebGL, Gamepad API, IndexedDB, and the File System Access API. File permissions and controller access require a secure context or localhost.