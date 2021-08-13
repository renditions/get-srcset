#! /bin/bash
npm exec --no tsc
npm exec --no esbuild -- getSrcset.ts --platform=neutral --format=cjs --outfile=getSrcset.dist.js
npm exec --no esbuild -- getSrcset.ts --platform=browser --format=cjs --target=es2017 --minify --outfile=getSrcset.dist.min.js
