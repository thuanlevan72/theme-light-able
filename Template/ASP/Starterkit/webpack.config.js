const path = require('path');
const rtlcss = require('rtlcss');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { RawSource } = require('webpack-sources');

// define global paths
const folder = {
    assets_path: "./wwwroot/assets"
};

// define rtl css pairs
const cssPairs = [
    { ltr: 'css/landing.css', rtl: 'css/landing-rtl.css' },
    { ltr: 'css/uikit.css', rtl: 'css/uikit-rtl.css' },
    { ltr: 'css/style.css', rtl: 'css/style-rtl.css' },
    { ltr: 'css/style-preset.css', rtl: 'css/style-preset-rtl.css' },
    // Add more pairs as needed
];

module.exports = {
    mode: 'development', // or 'production'
    entry: {
        style: path.join(__dirname, folder.assets_path, 'scss/style.scss'),
        "style-preset": path.join(__dirname, folder.assets_path, 'scss/style-preset.scss'),
        landing: path.join(__dirname, folder.assets_path, 'scss/landing.scss'),
        uikit: path.join(__dirname, folder.assets_path, 'scss/uikit.scss'),
    },
    output: {
        path: path.resolve(__dirname, folder.assets_path),
        filename: 'chunk/[name].js',
    },
    performance: {
        hints: false, // Disable performance hints
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        {
            apply(compiler) {
                compiler.hooks.thisCompilation.tap('GenerateRTL', (compilation) => {
                    compilation.hooks.processAssets.tap(
                        {
                            name: 'GenerateRTL',
                            stage: compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
                        },
                        () => {
                            cssPairs.forEach((pair) => {
                                const ltrCss = compilation.assets[pair.ltr].source(); // Use compilation.assets to retrieve the asset
                                const rtlCss = rtlcss.process(ltrCss, { autoRename: false, clean: false });
                                compilation.emitAsset(pair.rtl, new RawSource(rtlCss)); // Use emitAsset to add the asset
                            });
                        }
                    );
                });
            },
        },
    ],
};

