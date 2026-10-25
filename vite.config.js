import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: false,
    watch: {
      ignored: [
        '**/*.zip',
        '**/*.xlsx',
        '**/*.mp4',
        '**/Glass_*/**',
        '**/cdfc/**',
        '**/legacy_html/**',
        '**/.git/**',
      ],
    },
  },
});
