const mix = require('laravel-mix');

mix .setPublicPath('public')
    .js([
        'vendor/ocelot/core/public/js/core.js',
        'resources/js/app.js',
    ], 'js/app.js')
    .extract()
    .sass('resources/sass/app.scss', 'public/css')

if (mix.inProduction()) {
    mix.version()
}
