import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// 使用unplugin-auto-import插件后就无需在各个vue文件中引用vue的Api了
import AutoImport from "unplugin-auto-import/vite"
// 按需引入component
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
// import ViteCompression from "vite-plugin-compression" // 压缩打包文件使用
const path = require('path')
// 环境变量（主要是一些请求头的一些配置）
const serveConfig = require('./public/env/env.js')
// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd()) // 环境模式
  return {
    define: {
      'process.env': { ...env, ...serveConfig }
    },
    plugins: [
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        dts: "src/auto-import.d.ts",
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      vue()
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    },
    build: {
      sourcemap: env.VITE_APP_NODE_ENV === 'development',
      outDir: 'build', //指定输出路径
      assetsDir: 'static/img/', // 指定⽣成静态资源的存放路径
      brotliSize: false, // 不统计
      target: 'esnext',
      minify: 'esbuild', // 混淆器，terser构建后⽂件体积更⼩
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              const arr = id.toString().split('node_modules/')[1].split('/')
              switch (arr[0]) {
                // 把一些比较大的第三方依赖抽离出来
                case '@popperjs':
                case '@vue':
                case 'axios':
                case 'echarts':
                case 'lodash':
                case 'pinia':
                case 'element-plus':
                  return '_' + arr[0]
                  break;
                // 一些比较小的第三方库可以整合到一个文件当中
                default:
                  return '__vendor'
                  break;
              }
            }
          },
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        },
      }
    },
    // 服务器代理
    server: {
      proxy: {
        "/api": {
          target: serveConfig.VITE_APP_BASE_URL, // API服务器的地址
          ws: true,  // 代理websockets
          changeOrigin: true, // 虚拟的站点需要更管origin
        }
      }
    }
  }
})
