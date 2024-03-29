import { defineConfig, searchForWorkspaceRoot } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// TODO: Double check filepaths below
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()),
        "../../reducer/target/wasm32-unknown-unknown/debug/reducer.wasm",
        "../../reducer/target/wasm32-unknown-unknown/release/reducer.wasm"
      ],
    },
  },
});
