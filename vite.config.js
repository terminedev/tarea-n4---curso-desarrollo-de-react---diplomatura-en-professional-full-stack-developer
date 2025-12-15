import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'componentes': path.resolve(__dirname, './src/componentes'),
      'estilos': path.resolve(__dirname, './src/estilos')
    }
  }
});
