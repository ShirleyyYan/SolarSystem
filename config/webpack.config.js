const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const Process = require('child_process');
const port = 4000;

module.exports = () => {

    global.process.stdin.on('readable', ()=> {
        let info = '';
        var data = global.process.stdin.read();
        var isMac = global.process.platform === 'darwin';
        let url = `http://127.0.0.1:${port}/`;
        if (data) {
            data = data.toString().replace(/\n|\r|(\r\n)/gi, '');
            switch(data) {
                case 'o': {
                    Process.execSync(`open ${url}`);
                    break;
                }
                case 'u': {
                    Process.execSync(`npm run update:config`);
                    break;
                }
            }
        }
    });

    let copyfile = [
        { from: 'src/assets/texture', to: 'src/assets/texture'}
    ];


    let config = {
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, './../dist'),
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                { test: /\.css$/, loader: 'style-loader!css-loader' },
                { test: /\.json$/, loader: 'json-loader'}
            ]
        },
        plugins: [
            new CopyWebpackPlugin(copyfile),
            new HtmlWebpackPlugin({
                filename: 'index.html',

            })
        ],
        devServer: {
            port: port,
            contentBase: path.join(__dirname, './../dist')
        }

    }

    return config;

};