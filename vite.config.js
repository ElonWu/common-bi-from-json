import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  logLevel: 'error',

  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@imgs': path.resolve(__dirname, './src/assets/imgs'),
    },
  },

  server: {
    host: '0.0.0.0',
  },
});
