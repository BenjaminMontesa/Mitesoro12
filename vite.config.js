import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/About.html'),
        store: resolve(__dirname, 'pages/Store.html'),
        cart: resolve(__dirname, 'pages/Cart.html'),
      },
    },
  },
});
