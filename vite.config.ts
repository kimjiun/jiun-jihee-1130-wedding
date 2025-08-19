import react from '@vitejs/plugin-react';
import { Plugin, defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

function mpaRewritePlugin(): Plugin {
  return {
    name: 'mpa-rewrite',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const base = server.config.base;
        if (req.url && req.url.startsWith(base)) {
          const path = req.url.substring(base.length);
          if (path === 'groom' || path === 'groom/') {
            req.url = base + 'groom.html';
          } else if (path === 'bride' || path === 'bride/') {
            req.url = base + 'bride.html';
          }
        }
        next();
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr(), mpaRewritePlugin()],
  base: '/jiun-jihee-1130-wedding/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        groom: resolve(__dirname, 'groom.html'),
        bride: resolve(__dirname, 'bride.html'),
      },
    },
  },
});
