import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "./src/components"),
      layouts: path.resolve(__dirname, "./src/layouts"),
      pages: path.resolve(__dirname, "./src/pages"),
      cms: path.resolve(__dirname, "./src/cms"),
      utils: path.resolve(__dirname, "./src/utils"),
      "~": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
  },
});
