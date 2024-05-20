import { defineConfig } from 'vite';
import sass from 'sass';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            name: 'solias_core',
            entry: 'src/index.ts',
            formats: ['es']
        },
        rollupOptions: {
            external: /^lit/
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                implementation: sass,
            }
        }
    }
});