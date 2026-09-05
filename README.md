# TrailStudio

TrailStudio is a browser-based 3D controller visualizer for gamepad input, model previews, lighting, trails, and scene presets.

## Development

Install dependencies and create the browser bundle:

```sh
npm install
npm run build
```

Serve the project from a local HTTP server and open `index.html`. A local server is required for model loading, module assets, and browser storage APIs.

The release entrypoint is `index.html`, which loads the generated `dist/app.bundle.js`. Source code is organized by responsibility:

- `src/entry.js` is the bundle entrypoint.
- `src/app.js` coordinates the scene, managers, and UI bindings.
- `src/core/` contains shared state and persistence adapters.
- `src/managers/` owns gamepad, model, lighting, trail, and diagnostics behavior.
- `src/rendering/` owns Three.js rendering and post-processing.
- `src/ui/` owns browser controls and integration bridges.
- `tools/` contains Blender add-ons and one-off migration/debug utilities; it is not part of the browser bundle.
- `dist/` contains generated release artifacts.

## Quality checks

Run the production build after source changes:

```sh
npm run check
```

The generated bundle and source map are checked in because the application is also usable as a static site. Do not edit either generated file directly; update the source modules and run the build.

## Browser support

Use a current Chromium-based browser for the complete feature set, including WebGL, Gamepad API, IndexedDB, and the File System Access API. File permissions and controller access require a secure context or localhost.