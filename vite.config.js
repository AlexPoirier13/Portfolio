import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/', // <-- CHEMIN de ton GitHub Pages
  plugins: [react()],
});