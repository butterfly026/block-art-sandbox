import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@components': resolve(__dirname, 'src/components'),
      '@constants': resolve(__dirname, 'src/constants'),
      '@data': resolve(__dirname, 'src/data'),
      '@logic': resolve(__dirname, 'src/logic'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@router': resolve(__dirname, 'src/router'),
      '@utils': resolve(__dirname, 'src/utils'),
      '~': resolve(__dirname, 'src'),
      '@material-ui/icons': '@material-ui/icons/esm',
    },
  },
})
