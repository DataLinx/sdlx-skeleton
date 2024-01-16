import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import { existsSync } from 'fs';

export default ({ mode }) => {

    let work_dir;

    // Detect the working directory by checking if .env file exists in current dir
    if (existsSync(resolve(process.cwd(), '.env'))) {
        // App development
        work_dir = process.cwd();
    } else {
        // Package development, app skeleton is in vendor dir
        work_dir = '../../..';
    }

    process.env = Object.assign(process.env, loadEnv(mode, work_dir, ''));

    return defineConfig({
        plugins: [
            laravel({
                input: [
                    'resources/js/app.js',
                ],
                refresh: true,
            }),
            // livewire({}),
        ],
        resolve: {
            alias: {
                '~bootstrap': resolve(work_dir, 'node_modules/bootstrap'),
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
