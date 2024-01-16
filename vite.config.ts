// vite.config.ts
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import generouted from "@generouted/react-router/plugin";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
    }),
    generouted(),
    chunkSplitPlugin({
      strategy: "single-vendor",
      customChunk: (args) => {
        // files into pages directory is export in single files
        let { file, id, moduleId, root } = args;
        if (
          file.startsWith("src/pages/") ||
          file.startsWith("src/components/") ||
          file.startsWith("src/hooks/")
        ) {
          file = file.substring(4);
          file = file.replace(/\.[^.$]+$/, "");
          return file;
        }
        return null;
      },
      customSplitting: {
        // `react` and `react-dom` will be bundled together in the `react-vendor` chunk (with their dependencies, such as object-assign)
        "react-vendor": ["/node_modules/react", "/node_modules/react-dom"],
        // Any file that includes `utils` in src dir will be bundled in the `utils` chunk
        utils: [/src\/utils/],
      },
    }),
  ],
});
