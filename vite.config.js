import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'nested/About.html'),
        cart: resolve(__dirname, 'nested/ADD TO CART.html'),
        store: resolve(__dirname, 'nested/ArtStores.html'),
      },
    },
  },
});
