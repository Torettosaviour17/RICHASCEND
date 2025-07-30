// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  // add this block ONLY if you use "@/..." imports
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
