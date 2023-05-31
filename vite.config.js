import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/About.html'),
        store: resolve(__dirname, 'pages/ArtStores.html'),
        branch: resolve(__dirname, 'index2.html'),
      },
    },
  },
});
