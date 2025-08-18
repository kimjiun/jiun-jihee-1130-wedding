import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  base: '/jiun-jihee-1130-wedding/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        groom: resolve(__dirname, 'groom.html'),
        bride: resolve(__dirname, 'bride.html'),
        bride_dad: resolve(__dirname, 'bride_dad.html'),
        bride_mom: resolve(__dirname, 'bride_mom.html'),
      },
    },
  },
});
