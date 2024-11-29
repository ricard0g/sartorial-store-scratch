import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: './assets',
        emptyOutDir: false,
        assetsDir: '.', // With this we make sure that the asset file created by the build is added in the current outDir Directory
        rollupOptions: {
            input: './assets/app-alpine.js',
            output: {
                entryFileNames: 'app.js',
                assetFileNames: '[name].[ext]', // With this we make sure that the asset file created has the same name as our entry file name
                chunkFileNames: '[name].js',
            },
        },
    },
});
