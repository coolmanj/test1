import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path/posix'
import styleImport, { VantResolve } from 'vite-plugin-style-import';
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'assets': resolve(__dirname, './src/assets')
    }
  },
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
    WindiCSS(),
  ],
  base: './',
  // server: {
  //   // host: '0.0.0.0',
  //   // port: 3000,
  //   // 是否开启 https
  //   https: true,
  // }
})