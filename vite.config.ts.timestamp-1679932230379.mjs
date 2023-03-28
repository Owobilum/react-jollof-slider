// vite.config.ts
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import EsLint from "vite-plugin-linter";
import tsConfigPaths from "vite-tsconfig-paths";

// package.json
var peerDependencies = {
  react: "16.8.0 || >=17.x",
  "react-dom": "16.8.0 || >=17.x"
};

// vite.config.ts
var { EsLinter, linterPlugin } = EsLint;
var vite_config_default = defineConfig((configEnv) => ({
  plugins: [
    dts({
      include: ["src/component/"]
    }),
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ["./src}/**/*.{ts,tsx}"],
      linters: [new EsLinter({ configEnv })]
    })
  ],
  build: {
    lib: {
      entry: resolve("src", "component/index.ts"),
      name: "ReactViteLibrary",
      formats: ["es", "umd"],
      fileName: (format) => `react-vite-library.${format}.js`
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)]
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbGF3cmVuY2Vpa3BlYmUvRG9jdW1lbnRzL3dvcmsvcHJvamVjdHMvY3VzdG9tX2xpYi9yZWFjdC12aXRlLWxpYnJhcnlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9sYXdyZW5jZWlrcGViZS9Eb2N1bWVudHMvd29yay9wcm9qZWN0cy9jdXN0b21fbGliL3JlYWN0LXZpdGUtbGlicmFyeS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbGF3cmVuY2Vpa3BlYmUvRG9jdW1lbnRzL3dvcmsvcHJvamVjdHMvY3VzdG9tX2xpYi9yZWFjdC12aXRlLWxpYnJhcnkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJ1xuXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5pbXBvcnQgRXNMaW50IGZyb20gJ3ZpdGUtcGx1Z2luLWxpbnRlcidcbmltcG9ydCB0c0NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnXG5jb25zdCB7IEVzTGludGVyLCBsaW50ZXJQbHVnaW4gfSA9IEVzTGludFxuaW1wb3J0ICogYXMgcGFja2FnZUpzb24gZnJvbSAnLi9wYWNrYWdlLmpzb24nXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKChjb25maWdFbnYpID0+ICh7XG4gIHBsdWdpbnM6IFtcbiAgICBkdHMoe1xuICAgICAgaW5jbHVkZTogWydzcmMvY29tcG9uZW50LyddLFxuICAgIH0pLFxuICAgIHJlYWN0KCksXG4gICAgdHNDb25maWdQYXRocygpLFxuICAgIGxpbnRlclBsdWdpbih7XG4gICAgICBpbmNsdWRlOiBbJy4vc3JjfS8qKi8qLnt0cyx0c3h9J10sXG4gICAgICBsaW50ZXJzOiBbbmV3IEVzTGludGVyKHsgY29uZmlnRW52IH0pXSxcbiAgICB9KVxuICBdLFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHJlc29sdmUoJ3NyYycsICdjb21wb25lbnQvaW5kZXgudHMnKSxcbiAgICAgIG5hbWU6ICdSZWFjdFZpdGVMaWJyYXJ5JyxcbiAgICAgIGZvcm1hdHM6IFsnZXMnLCAndW1kJ10sXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYHJlYWN0LXZpdGUtbGlicmFyeS4ke2Zvcm1hdH0uanNgLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsuLi5PYmplY3Qua2V5cyhwYWNrYWdlSnNvbi5wZWVyRGVwZW5kZW5jaWVzKV0sXG4gICAgfSxcbiAgfSxcbn0pKVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtWixTQUFTLGVBQWU7QUFFM2EsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxtQkFBbUI7Ozs7Ozs7OztBQUMxQixJQUFNLEVBQUUsVUFBVSxhQUFhLElBQUk7QUFHbkMsSUFBTyxzQkFBUSxhQUFhLENBQUMsZUFBZTtBQUFBLEVBQzFDLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxNQUNGLFNBQVMsQ0FBQyxnQkFBZ0I7QUFBQSxJQUM1QixDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsSUFDZCxhQUFhO0FBQUEsTUFDWCxTQUFTLENBQUMsc0JBQXNCO0FBQUEsTUFDaEMsU0FBUyxDQUFDLElBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQUEsSUFDdkMsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxPQUFPLG9CQUFvQjtBQUFBLE1BQzFDLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixVQUFVLENBQUMsV0FBVyxzQkFBc0I7QUFBQSxJQUM5QztBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLEdBQUcsT0FBTyxLQUFpQixnQkFBZ0IsQ0FBQztBQUFBLElBQ3pEO0FBQUEsRUFDRjtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
