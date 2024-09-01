const Webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");
const HTMLInlinePlugin = require("html-inline-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CSSMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CSSManglePlugin = require("css-mangle-webpack-plugin");

// Whether it is in debug build mode.
const isDebug = process.env.BUILD_TYPE.includes("dev");

/** @type {import("webpack").Configuration} */
module.exports = {
    mode: isDebug ? "development" : "production",
    entry: "./src/index.tsx",
    output: { publicPath: "/" },
    devServer: {
        port: 9000,
        proxy: [
            { // About proxy settings for sub domain api.
                context: ['/api'],
                target: 'http://localhost:8080',
                changeOrigin: true
            }
        ],
        historyApiFallback: true // SPA
    },
    module: {
        rules: [
            { // Converts a TSX files to JS files and it load all.
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: "/node_modules/"
            },
            { // Includes CSS files within the TSX in the bundler.
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            { // Converts a SVG files to preact components all.
                test: /\.svg$/,
                use: ["preact-svg-loader"],
            },
            { // To export the font assets files from `src/` to `dist/`.
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".css"],

        // Resolves compatibility issues that arise during the building of React packages.
        alias: {
            "react": "preact/compat",
            "react-dom": "preact/compat",
            "react/jsx-runtime": "preact/jsx-runtime"
        },
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CSSMinimizerPlugin({
            parallel: true, // Is parallel processing.
            minify: [
                CSSMinimizerPlugin.cssoMinify,
                CSSMinimizerPlugin.cssnanoMinify,
            ]
        }),
        new CSSManglePlugin({minify: !isDebug}),
        new HTMLInlinePlugin({
            template: "./src/index.html",
            filename: "./index.html",
            favIcon: "./src/assets/favicon.svg",

            // When in debug mode, static resources such as CSS or JS are
            // not merged into the document in inline form.
            //
            // Instead, they are requested asynchronously by the client to track changes.
            inline: isDebug == false,
            pretty: false,
        }),
        new Webpack.DefinePlugin({"process.env.IS_DEBUG": isDebug})
    ],

    // Ignores about assets resource size all. (i.g. font)
    performance: { hints: false },
    optimization: {
        minimize: !isDebug,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    compress: {
                        // Remove a unnecessary function arguments.
                        keep_fargs: true,

                        // In most cases, it is recommended to remove debug-related code because
                        // the user does not need to debug, but remove it in special cases.
                        drop_console: true,
                        drop_debugger: true,
                        dead_code: true,
                        unused: true,
                    },
                    mangle: {
                        properties: false,
                        toplevel: true,
                        eval: true
                    },
                    output: {
                        // In most cases, No comments providing is required to user.
                        // So, rather, it is recommended to remove the comments.
                        comments: false,
                    }
                }
            })
        ]
    }
}