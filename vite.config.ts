import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vike(), react(), tailwindcss()],
  
  ssr: {
    external: ['@prisma/client', '.prisma/client'],
  },
  
  optimizeDeps: {
    exclude: ['@prisma/client', '.prisma/client'],
  },
});