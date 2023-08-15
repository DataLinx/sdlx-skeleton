import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import livewire from "@defstudio/vite-livewire-plugin";

export default ({ mode }) => {
    process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

    return defineConfig({
        plugins: [
            laravel({
                input: [
                    'resources/js/app.js',
                ],
                refresh: true,
            }),
            livewire({}),
        ],
        resolve: {
            alias: {
                '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
            },
        },
        build: {
            sourcemap: true,
        },
        server: {
            host: (new URL(process.env.APP_URL)).hostname,
        },
    });
};
