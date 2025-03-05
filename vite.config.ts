import react from "@vitejs/plugin-react";
import { readFileSync } from "fs";
import { resolve } from "path";
import { defineConfig } from "vite";

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
        // Preserve module structure
        preserveModules: true,
        // Place preserved modules within a 'lib' directory
        preserveModulesRoot: "src",
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
