import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import path from 'path';

export default defineConfig({
    plugins: [sveltekit()],

    resolve: {
        alias: {
            $posts: path.resolve('../posts')
        }
    },
    server: {
        fs: {
            // Allow serving files from one level up to the project root
            allow: ['..'],
        },
    },
});
