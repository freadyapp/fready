import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

import { terser } from "rollup-plugin-terser"

import sizes from 'rollup-plugin-sizes';
import json from '@rollup/plugin-json';
import visualizer from 'rollup-plugin-visualizer'
import pkg from './package.json';

console.log("[ BUNDLING ] @ ", process.env["xfready2_ENV"])

const env = process.env["xfready2_ENV"]
const prod = (env=='production' || env == 'prod')

function ifProd(plug, params){
  // return plug(params)
  return prod ? plug(params) : null
}

const plugs = [
  ifProd(terser), // mini
  ifProd(sizes),
  json(),
  ifProd(visualizer,{
    filename: "docs/stats.html",
    title: "xfready2 Visualised",
    sourcemap: false
  })
]


export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    //external: ['tippy', 'mousetrap', 'animejs' ],
    output: [
    //   {
    //   name: 'xfready2',
    //   file: pkg.browser,
    //   format: 'umd'
    // }, {
    //   name: 'xfready2',
    //   file: "docs/scripts/xfready2.umd.js",
    //   format: 'umd'
    // },
    {
      name: 'xfready2',
      file: "app/scripts/libs/xfready2.umd.js",
      format: 'umd'
    }],
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module

    ].concat(plugs)
  },
  // {
  //   input: 'src/index.js',
  //   external: [ 'ms' ],
  //   output: [
  //     { file: pkg.main, format: 'cjs' },
  //     { file: pkg.module, format: 'es' }
  //   ],
  //   plugins: [
  //     // terser()
  //   ].concat(plugs)
  // }
]

