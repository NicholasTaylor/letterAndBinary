const mix = require('laravel-mix');
const path = require('path');

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

mix.webpackConfig({
    resolve: {
        alias: {
            'react' : path.resolve('node_modules/react'),
            'react-dom' : path.resolve('node_modules/react-dom'),
            'components' : path.resolve('resources/js/src/components'),
        }
    }
})

mix.copyDirectory('resources/img','public/img')
    .js('resources/js/app.js', 'public/js').react()
    .css('resources/css/bootstrap-reboot.min.css', 'public/css')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/nav.scss', 'public/css')
    .browserSync({
        open: false,
        watch: true,
        proxy: '127.0.0.1:80'
    });
