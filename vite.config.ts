import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import ViteFonts from 'vite-plugin-fonts'

export default defineConfig({
  // resolve: {
  //   alias: [
  //     { find: '@', replacement: resolve(__dirname, './src') },
  //     {
  //       find: '@components',
  //       replacement: resolve(__dirname, './src/components'),
  //     },
  //   ],
  // },
  plugins: [
    reactRefresh(),
    ViteFonts({
      google: {
        families: ['Fira Sans Condensed'],
      },
    }),
  ],
})
