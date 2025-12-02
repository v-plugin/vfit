import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'FitScale',
      fileName: (format) => `fitscale.${format}.js`
    },
    minify: 'terser',
    terserOptions: {
      mangle: true,
      compress: false,
      format: { comments: false }
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' }
      }
    }
  }
})