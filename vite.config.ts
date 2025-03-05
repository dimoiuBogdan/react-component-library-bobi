import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { readFileSync } from "fs";

// Read package.json to get peer dependencies
const pkg = JSON.parse(readFileSync("./package.json", "utf-8"));

const peerDependencies = Object.keys(pkg.peerDependencies || {});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ReactComponentLibrary",
      fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [
        ...peerDependencies,
        "react/jsx-runtime",
        /^react\/.*/, // Anything that starts with react/
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
        // Ensure proper exports
        exports: "named",
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    // Ensure React is not bundled
    commonjsOptions: {
      esmExternals: true,
    },
  },
});
