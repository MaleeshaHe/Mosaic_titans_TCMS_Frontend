import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://mosaic-titans-tcms-backend.onrender.com",
        secure: false,
      },
    },
  },
  plugins: [react(), tailwindcss(), svgr()],
});
