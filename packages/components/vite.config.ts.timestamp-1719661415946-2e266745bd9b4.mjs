// vite.config.ts
import vue from "file:///home/tammibriggs/Desktop/Code/Directus/directus-fork/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.11_@types+node@18.19.33_sass@1.77.1_terser@5.31.0__vue@3.4.27_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "node:path";
import { nodeExternals } from "file:///home/tammibriggs/Desktop/Code/Directus/directus-fork/node_modules/.pnpm/rollup-plugin-node-externals@7.1.2_rollup@4.17.2/node_modules/rollup-plugin-node-externals/dist/index.js";
import { defineConfig } from "file:///home/tammibriggs/Desktop/Code/Directus/directus-fork/node_modules/.pnpm/vite@5.2.11_@types+node@18.19.33_sass@1.77.1_terser@5.31.0/node_modules/vite/dist/node/index.js";
import dts from "file:///home/tammibriggs/Desktop/Code/Directus/directus-fork/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@18.19.33_rollup@4.17.2_typescript@5.4.5_vite@5.2.11_@types+_g3kj4za22h6de4bwsvwq367liq/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/home/tammibriggs/Desktop/Code/Directus/directus-fork/packages/components";
var vite_config_default = defineConfig({
  plugins: [{ ...nodeExternals(), enforce: "pre" }, vue(), dts()],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      fileName: "index",
      formats: ["es"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS90YW1taWJyaWdncy9EZXNrdG9wL0NvZGUvRGlyZWN0dXMvZGlyZWN0dXMtZm9yay9wYWNrYWdlcy9jb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS90YW1taWJyaWdncy9EZXNrdG9wL0NvZGUvRGlyZWN0dXMvZGlyZWN0dXMtZm9yay9wYWNrYWdlcy9jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3RhbW1pYnJpZ2dzL0Rlc2t0b3AvQ29kZS9EaXJlY3R1cy9kaXJlY3R1cy1mb3JrL3BhY2thZ2VzL2NvbXBvbmVudHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCB7IG5vZGVFeHRlcm5hbHMgfSBmcm9tICdyb2xsdXAtcGx1Z2luLW5vZGUtZXh0ZXJuYWxzJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRwbHVnaW5zOiBbeyAuLi5ub2RlRXh0ZXJuYWxzKCksIGVuZm9yY2U6ICdwcmUnIH0sIHZ1ZSgpLCBkdHMoKV0sXG5cdGJ1aWxkOiB7XG5cdFx0bGliOiB7XG5cdFx0XHRlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgudHMnKSxcblx0XHRcdGZpbGVOYW1lOiAnaW5kZXgnLFxuXHRcdFx0Zm9ybWF0czogWydlcyddLFxuXHRcdH0sXG5cdH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlksT0FBTyxTQUFTO0FBQzdaLFNBQVMsZUFBZTtBQUN4QixTQUFTLHFCQUFxQjtBQUM5QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFKaEIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsU0FBUyxDQUFDLEVBQUUsR0FBRyxjQUFjLEdBQUcsU0FBUyxNQUFNLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztBQUFBLEVBQzlELE9BQU87QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNKLE9BQU8sUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDeEMsVUFBVTtBQUFBLE1BQ1YsU0FBUyxDQUFDLElBQUk7QUFBQSxJQUNmO0FBQUEsRUFDRDtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
