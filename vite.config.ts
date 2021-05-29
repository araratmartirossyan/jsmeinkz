import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import viteGraphQl from '@rollup/plugin-graphql'
import ViteFonts from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // alias: [{ find: "@", replacement: resolve(__dirname, "./src") }, ],
    alias: [
      { find: '@', replacement: resolve(__dirname, './src') },
      {
        find: '@components',
        replacement: resolve(__dirname, './src/components'),
      },
    ],
  },
  plugins: [
    reactRefresh(),
    viteGraphQl(),
    ViteFonts({
      google: {
        families: ['Fira Sans Condensed'],
      },
    }),
  ],
})
