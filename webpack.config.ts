import webpack from 'webpack';
import * as path from 'path';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: [ './src/app.ts'],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader!sass-loader",
				}),
			},
			{
				test: /\.ts$/,
				use: 'ts-loader'
			},
		],
	},
	plugins: [
		new ExtractTextPlugin("app.css"),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: true,
		})
	],
	resolve: {
		extensions: [ '.ts', '.js' ],
		modules: [
			path.resolve('./src'),
			'node_modules'
		]
	},
	output: {
		path: path.resolve('./dist'),
		filename: '[name].js'
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000
	}
};

export default config;
