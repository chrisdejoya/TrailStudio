import { build } from 'esbuild';

await build({
  entryPoints: ['js/entry.js'],
  bundle: true,
  sourcemap: true,
  format: 'iife',
  target: 'es2018',
  minify: true,
  outfile: 'js/app.bundle.js',
  logLevel: 'info'
});