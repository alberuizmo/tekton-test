/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  build: {
    target: "esnext",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    },
  },
  plugins: [
    vue(),
  ],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ['src/tests/setupTest.ts'],
    include: ["**/__tests__/**/*.{test,spec}.{ts,tsx}", "**/*.{test,spec}.{ts,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "json-summary"],
      reportsDirectory: "./coverage",
      exclude: [
        "node_modules/",
        "tests/",
        "dist/",
        "vite.config.ts",
        "src/main.ts",
        "**/*.d.ts"
      ],
    },
  },
});
