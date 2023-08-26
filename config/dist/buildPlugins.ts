import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

export function buildPlugins({
    paths,
    isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    // * devPlugins - плагины, которые нужны только в режиме разработки,
    // * обновление изменений без перезагрузки страницы

    const devPlugins: webpack.WebpackPluginInstance[] | [] = isDev
        ? [
            new webpack.HotModuleReplacementPlugin(),
            new ReactRefreshWebpackPlugin(),
        ].filter(Boolean)
        : [];

    // * html-webpack-plugin нужен для внедрения JS в index.html
    // * ProgressPlugin показывает проценты сборки (Progress Bar)

    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new BundleAnalyzerPlugin({ openAnalyzer: false, analyzerMode: process.env.analyze as 'server' || 'disabled' }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        ...devPlugins,
    ];
}
