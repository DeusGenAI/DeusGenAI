import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {resolve} from 'path';

//console.log(process.env.NODE_ENV);
// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  return {
    base: './',
    build: {
      outDir: resolve(__dirname, mode === 'test'?"testDeus":'Deus')
    },
    plugins: [
      vue(),
      vueJsx(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      host: '0.0.0.0',
      port: mode === 'test' ? 3006 : 30066
    },
    devServer: {
      proxy: {
        '/api': {
          target: '',          changeOrigin: true,          pathRewrite: { '^/api': '' }        }
      }},
  }
})
