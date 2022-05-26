// eslint-disabled
// import commonjs  from "@rollup/plugin-commonjs";
import path from "path"
import clear from "rollup-plugin-clear";
import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
import tsPlugin from "@rollup/plugin-typescript";
import resolve from '@rollup/plugin-node-resolve'
import dts from 'rollup-plugin-dts'
// import { terser } from 'rollup-plugin-terser'

// const getPath = _path => path.resolve(__dirname, _path)

// 当前执行命令的路径
const root = process.cwd()
const input = `${root}/packages/${process.env.PACKAGE}/api/api.ts`

// 获取每个包的package.json
// eslint-disable-next-line no-restricted-globals
const pkg = require(path.resolve(`${root}/packages/${process.env.PACKAGE}`, 'package.json'))
// console.log(pkg, "pkg")

const extensions = ['.ts', '.js'];

const commonPlugin = [
  clear({
    targets: ["lib"],
  }),
  json(),
  resolve({ extensions }),
]

const commonExternal  = [
  'axios',
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
]

const jsConfig  = {
  input,
  external: [
    ...commonExternal
  ],
  output: [{
    exports: 'auto',
    // sourcemap: true,
    format: 'es',
    file: path.join(`${root}/packages/${process.env.PACKAGE}`, pkg.module),
  }],
  plugins: [
    ...commonPlugin,
    tsPlugin(),
    babel({ babelHelpers:['runtime'], extensions, include: ['./src/**/*'] }),
    resolve({ extensions }),
  ],
  watch: {
    chokidar: {
      usePolling: true
    }
  }
}


const dtsConfig = {
  input,
  external: [
    ...commonExternal
  ],
  output: [{
    file: path.join(`${root}/packages/${process.env.PACKAGE}`, pkg.types),
    format: 'es',
    exports: 'auto',
    // sourcemap: true,
  }],
  plugins: [
    ...commonPlugin,
    dts(),
  ],
  watch: {
    chokidar: {
      usePolling: true
    }
  }
}

//  执行的编译模块
export default [ jsConfig, dtsConfig ] 