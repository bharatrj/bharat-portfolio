'use strict';

/**
 * An Admin Template Master Branch Project of BHARAT-INFOTECH{BIT}
 * Made with Love
 * Created By BHARAT-INFOTECH{BIT}
 * Updated by Bharat Jograna on 30 Sep 2025
 * Copyright 2025 All Rights Reserved BHARAT-INFOTECH
 * Generated using (npm i webpack webpack-cli, npx webpack-cli init) https://github.com/webpack/webpack-cli
 * Webpack Config
*/

const path = require('path');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');


// Detect environment
const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDev ? 'development' : 'production',

    // ENTRY: Project entry file
    entry: './src/index.js',

    // OUTPUT: Bundles / chunks
    output: {
        // The build folder.
        path: path.resolve(__dirname, 'build'),

        // Bundle name (optimized for caching)
        // filename: '[name].js',
        filename: isDev
            ? 'static/js/bundle.js'
            : 'static/js/[name].[contenthash:8].js',

        // Chunk names for lazy-loaded modules
        chunkFilename: isDev
            ? 'static/js/[name].chunk.js'
            : 'static/js/[name].[contenthash:8].chunk.js',

        // We inferred the "public path" (such as / or /my-project) from homepage.
        publicPath: '/', // Required for SPA routing
        clean: true, // cleans dist folder before each build

        // hot update filenames for dev HMR
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json'
    },

    // SOURCE MAPS
    devtool: isDev ? 'eval-source-map' : 'source-map',

    // PERFORMANCE WARNINGS
    performance: {
        hints: isDev ? false : 'warning',
    },

    // DEV SERVER (React HMR + SPA)
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        // host: 'localhost',
        port: 3005,
        open: true,
        compress: true,
        historyApiFallback: true,
        hot: true,
    },

    // resolve path alias (Absolute paths)
    resolve: {
        alias: {
            Asset: path.resolve(__dirname, 'src/assets/'),
            Component: path.resolve(__dirname, 'src/components/'),
            Config: path.resolve(__dirname, 'src/configs/'),
            Helper: path.resolve(__dirname, 'src/helpers/'),
            Route: path.resolve(__dirname, 'src/routes/'),
            Store: path.resolve(__dirname, 'src/toolkitStore/'),
            Validation: path.resolve(__dirname, 'src/validations/')
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },

    // OPTIMIZATION (Build Size Reduction)
    optimization: {

        // In dev mode, disable chunks to avoid missing chunk errors
        splitChunks: isDev ? false : {
            chunks: 'all', // In production, enable aggressive code splitting
            minSize: 20 * 1024,   // Min chunk size (20KB)
            // maxSize: 244 * 1024,  // Try splitting large files
        },
        runtimeChunk: isDev ? false : 'single',

        // Minification
        minimize: isDev ? false : true,
        minimizer: isDev ? [] : [
            // new TerserPlugin({
            //     extractComments: false,
            //     terserOptions: {
            //         format: {
            //             comments: false,
            //         },
            //     },
            // }),
            // new CssMinimizerPlugin(),
        ],

    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './public/index.html',
            favicon: './public/favicon.ico',
        }),

        // Extract CSS into separate files
        new MiniCssExtractPlugin({
            filename: isDev ? '[name].css' : 'static/css/[name].[contenthash:8].css',
            chunkFilename: isDev
                ? 'static/css/[name].css'
                : 'static/css/[name].[contenthash:8].css',
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/

        // // React Fast Refresh (HMR)
        // ...(isDev ? [new ReactRefreshWebpackPlugin()] : []),
    ],

    // MODULE RULES (Loaders)
    module: {
        rules: [

            // 🔹 JS / TS with Babel + React Fast Refresh in dev
            {
                test: /\.(js|jsx|ts|tsx)$/i,
                exclude: /node_modules/,
                use: 'babel-loader',
            },

            // 🔹 HTML
            {
                test: /\.html$/i,
                use: [{
                    loader: 'html-loader',
                    options: { minimize: !isDev }
                }],
            },

            // 🔹 CSS / SASS
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },

            // 🔹 Images (optimized modern Webpack assets)
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'static/media/[name].[hash:8][ext]',
                },
            },

            // 🔹 Fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'static/fonts/[name].[hash:8][ext]',
                },
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};
