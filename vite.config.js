import { defineConfig } from "vite";
import VitePluginWebpCompress from 'vite-plugin-webp-compress';

export default defineConfig ({
    plugins: [
        VitePluginWebpCompress(),
    ],

    build: {
        assetsInlineLimit: 0,
        emptyOutDir: true,

        rollupOptions : {
            output: {
                assetFileNames: ({name}) => {
                    if (/\.(gif|jpe?g|png|webp|ico)$/.test(name ?? '')) {
                        return 'img/[name][extname]'
                    }
                    if (/\.css$/.test(name ?? '')) {
                        return 'css/[name][extname]'
                    }
                    if (/\.(oet|woff2|woff|ttf|otf)$/.test(name ?? '')) {
                        return 'fonts/[name][extname]'
                    }
                    return '[name][extname]'
                },
                entryFileNames: 'js/[name].js'
            }
        }

    },
});
