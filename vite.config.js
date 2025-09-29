import { defineConfig } from 'vite'

export default defineConfig({
  // Configuración del servidor de desarrollo
  server: {
    port: 3000,
    open: true, // Abre automáticamente el navegador
    host: true  // Permite acceso desde la red local
  },
  
  // Configuración de build
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Mantener nombres de archivos para debugging
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  
  // Configuración base
  base: './',
  
  // Optimización de dependencias
  optimizeDeps: {
    exclude: [] // Excluir librerías que no necesitan optimización
  }
})
