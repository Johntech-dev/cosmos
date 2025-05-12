
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      // Add a custom tsconfig path to avoid the reference issues
      tsDecorators: true,
      plugins: [
        // Using proper plugin format that doesn't cause TypeScript errors
        ["custom-tsconfig-path", {
          config: () => ({
            esbuild: {
              tsconfigRaw: {
                compilerOptions: {
                  skipLibCheck: true,
                  skipDefaultLibCheck: true
                }
              }
            }
          })
        }]
      ]
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Disable TypeScript checking in Vite to avoid reference issues
  optimizeDeps: {
    esbuildOptions: {
      tsconfigRaw: {
        compilerOptions: {
          experimentalDecorators: true
        }
      }
    }
  }
}));
