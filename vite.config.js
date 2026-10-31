import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages does not support custom response headers. Inject a CSP into the
// production HTML instead; keep Vite's development client and HMR unaffected.
const productionCsp = {
  name: 'production-content-security-policy',
  apply: 'build',
  transformIndexHtml() {
    return [{
      tag: 'meta',
      attrs: {
        'http-equiv': 'Content-Security-Policy',
        content: "default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'none'; form-action 'none'"
      },
      injectTo: 'head-prepend'
    }];
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), productionCsp],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react']
        }
      }
    }
  }
});

