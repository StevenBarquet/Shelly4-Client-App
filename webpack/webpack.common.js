const path = require('path')

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/javascript/index.tsx')
  },
  // Crear shortcuts para paths absolutos
  resolve: {
    extensions: ['.tsx', '.ts','.js', '.jsx', '.json'],
    alias: {
      Comp: path.resolve(__dirname, '../src/javascript/components'),
      Cont: path.resolve(__dirname, '../src/javascript/containers'),
      Pages: path.resolve(__dirname, '../src/javascript/cPages'),
      CComps: path.resolve(__dirname, '../src/javascript/commonComps'),
      Utils: path.resolve(__dirname, '../src/javascript/cUtils'),
      Others: path.resolve(__dirname, '../src/javascript/others'),
      Actions: path.resolve(__dirname, '../src/javascript/reduxActions'),
      Reducers: path.resolve(__dirname, '../src/javascript/reduxReducers'),
      '@Reducers': path.resolve(__dirname, '../src/javascript/reduxReducers'),
      '@Declarations': path.resolve(__dirname, '../src/javascript/declarations.d.ts'),
      Types: path.resolve(__dirname, '../src/javascript/reduxTypes'),
      Images: path.resolve(__dirname, '../src/images')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
        use: {
          loader: 'url-loader', // incluir url loader
          options: {
            limit: 1,
            name: '[name].[ext]',
            outputPath: 'media/'
          }
        }
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|mp4)$/i,
        type: 'asset/resource',
      }
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist'), // Genera ruta dependiendo tu SO, dist es una convencion donde van los js compilados
    // filename: 'papu-bundle-[name].js'
    filename: 'javascript/[name].js', // name corresponde a los nombres key de el objeto entry
    publicPath: '/'
  },
  stats: 'errors-only',
}
