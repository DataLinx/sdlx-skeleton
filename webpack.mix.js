const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix .js([
        'resources/js/app.js',
        'vendor/ocelot/core/resources/js/core.js',
    ], 'public/js')
    .extract()
    .sass('resources/sass/app.scss', 'public/css')
    .sass('vendor/ocelot/core/resources/sass/core.scss', 'public/css')
    .browserSync(process.env.APP_URL)

if (mix.inProduction()) {
    mix.version()
}
