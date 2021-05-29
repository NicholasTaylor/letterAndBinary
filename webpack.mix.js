const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .css('resources/css/bootstrap-reboot.min.css', 'public/css')
    .sass('resources/sass/app.scss', 'public/css')
    .browserSync({
        open: false,
        watch: true,
        proxy: '127.0.0.1:80'
    });
