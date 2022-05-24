import path from "path"
import commonjs  from "@rollup/plugin-commonjs";
import clear from "rollup-plugin-clear";
import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'


// 当前执行命令的路径
const root = process.cwd()

const input = `${root}/packages/${process.env.PACKAGE}/api/api.ts`

// 获取每个包的package.json
const pkg = require(path.resolve(`${root}/packages/${process.env.PACKAGE}`, 'package.json'))
// console.log(pkg, "pkg")

// If you do want to include the module in your bundle, you need to tell Rollup how to find it. 
// In most cases, this is a question of using @rollup/plugin-node-resolve.
// ！缺少配置的情况 rollup无法找到进行解析
const extensions = ['.ts', '.js'];
const staticConfig = {
  input,
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
   ],
   plugins: [
    clear({
      targets: ["lib"],
    }),
  // 'runtime' - 如果你要用rollup构建一个js包的时候，使用该配置，该配置要结合@babel/plugin-transform-runtime插件使用，
  //             使用@babel/plugin-transform-runtime也要安装@babel/runtime插件
  // 'bundled' - 如果用rollup构建一个项目的用此参数
    babel({ babelHelpers:['runtime'], extensions, include: ['./src/**/*'] }),
    resolve({ extensions }),
    commonjs(),
    terser(),
    json(),
    typescript(),
  ],
  watch: {
    chokidar: {
        usePolling: true
    }
  }
}

//  执行的编译模块
export default [
  {
    ...staticConfig,
    output:
     [{
        exports: 'auto',
        sourcemap: true,
        file: path.join(`${root}/packages/${process.env.PACKAGE}`, pkg.module),
        format: 'es',
    }]
  },
  {
    ...staticConfig,
    output: [{
      file: path.join(`${root}/packages/${process.env.PACKAGE}`, pkg.types),
      format: 'cjs',
      exports: 'auto',
      sourcemap: true,
      generatedCode: {
        arrowFunctions: true,
        constBindings: true,
        objectShorthand: true,
        preset: 'es2015',
      },
    }],
  }
]