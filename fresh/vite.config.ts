import { defineConfig } from "vite";
import path from "path";
// import react from "@vitejs/plugin-react";
import react from "@vitejs/plugin-react-swc";
import generouted from "@generouted/react-router/plugin";

export default defineConfig({
  plugins: [react(), generouted()],
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
