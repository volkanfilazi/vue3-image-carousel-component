import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'


export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/main.ts'),
      name: 'VCarousel',
      fileName: 'vue3-image-carousel-component'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  css: {
    modules: {
      generateScopedName: '[name]_[local]__[hash:base64:5]'
    },
    postcss: {
      plugins: [
        autoprefixer() // Autoprefixer'ı postcss eklentisi olarak ekleyin
      ]
    }
  }
})


