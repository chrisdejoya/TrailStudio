import { build } from 'esbuild';

await build({
  entryPoints: ['src/entry.js'],
  bundle: true,
  sourcemap: true,
  format: 'iife',
  target: 'es2018',
  minify: true,
  outfile: 'dist/app.bundle.js',
  logLevel: 'info',
});
