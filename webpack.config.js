const webpack = require('webpack');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
    entry: {
        index: './public/js/index.js'
    },
    output: {
        path: path.join(__dirname + "/public/dist"),
        filename: "[name].bundle.js",
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name(file) {
                                return '[path][name].[ext]';
                            },
                            publicPath(url) {
                                return url.replace('../', '/assets/');
                            }
                        }
                    },
                    {
                    loader: 'image-webpack-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery'
        // }),
        new WebpackPwaManifest({
            name: "Pwafect Budget Tracker",
            short_name: "Pwafect",
            description: "An app for tracking your budget.",
            display: "standalone",
            start_url: "/",
            background_color: "#3D3B8E",
            theme_color: "#B0E298",
            fingerprints: false,
            inject: false,
            icons: [{
                src: path.resolve("public/icons/icon-512x512.png"),
                sizes: [72, 96, 128, 144, 152, 192, 384, 512],
                destination: path.join("assets", "icons")
            }]
        })
    ],
    mode: 'development'
};

module.exports = config;