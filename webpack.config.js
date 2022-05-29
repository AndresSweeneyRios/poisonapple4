const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader', 
          'css-loader',
        ],
      },
      {
        test: /\.(svg|woff|woff2|eot|ttf|otf|fbx)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
      {
        test: /png|jpg|webp|gif/,
        type: 'asset',
      },
      {
        test: /\.(vert|frag)$/,
        use: 'raw-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].bundle.js",
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
  },

  mode: process.env.NODE_ENV || "development",

  devtool: process.env.NODE_ENV === 'production' ? 'none' : 'source-map',

  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT || 22222,
    historyApiFallback: true,
  },
})