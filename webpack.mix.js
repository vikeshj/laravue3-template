let mix = require("laravel-mix");
let webpack = require("webpack");

mix.js("./resources/js/app.js", "js/")
    .vue();
mix.sass("./resources/scss/app.scss", "css/");
mix.options({
    processCssUrls: false,
    postCss: [
        require("postcss-import"),
        require("postcss-nested"),
        require("autoprefixer"),
        require("@tailwindcss/jit"),
        //require("tailwindcss"),
    ],
});
mix.webpackConfig({
    plugins: [
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
        }),
    ],
});
mix.browserSync({
    proxy: "localhost:8000",
    files: ["public/**/*", "resources/*.*"],
    notify: false,
    reloadDebounce: 2000,
});

/*
 |--------------------------------------------------------------------------
 | DO NOT EDIT BELOW
 |--------------------------------------------------------------------------
 */
mix.setPublicPath("public");
mix.setResourceRoot("./");
