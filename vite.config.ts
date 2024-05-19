import { defineConfig } from 'vite';
import sass from 'sass';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            name: 'solias_core',
            entry: 'src/my-element.ts',
            formats: ['es']
        },
        rollupOptions: {
            external: /^lit/,
            input: [
                'src/scss/styles.scss'
            ]
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