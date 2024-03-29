import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/github-profile-app/',
  plugins: [react()],
  resolve: {
    alias: {
      "node-fetch": "isomorphic-fetch",
    },
  },
  define: {
    global: {},
  },
});