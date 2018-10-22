const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './jsx/app.jsx',
  output: {
    path: __dirname + '/js/',
    filename: 'bundle.js'
  },
  devtool: '#sourcemap',
  stats: {
   colors: true,
   reasons: true
  },  
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }, {
        loader: 'json-loader',
        test: /\.json$/
      },{
        loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[local]__[hash:base64:5]'),
        test: /\.css$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
}
