# webpack Cheatsheet

Installation

```sh
# install webpack
npm install --save-dev webpack webpack-cli

# webpack-dev-server

npm install --save-dev webpack-dev-server

# html
npm install --save-dev html-webpack-plugin

# css
npm install --save-dev style-loader css-loader

# sass
npm install --save-dev sass-loader sass

# install all of the above

npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin style-loader css-loader sass-loader sass
```

```js
// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // remove unused files
  },
  mode: "development",
  devtool: "inline-source-map", // debugging
  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant Page: Odin Project #10",
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // css
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i, // sass
        use: [
          // 3. Creates `style` nodes from JS strings
          "style-loader",
          // 2. Translates CSS into CommonJS
          "css-loader",
          // 1. Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: "compressed",
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // images
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // fonts
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    static: "./dist",
  },
  optimization: {
    runtimeChunk: "single", // dev-server
  },
};
```

package.json

```js
"scripts": {
    "build": "webpack",
    "start": "webpack serve --open"
  },
```

## CSS

```sh
# css
npm install --save-dev style-loader css-loader
```

```js
// webpack.config.js
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
```

## SCSS

```js
  {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
     {
        loader: "sass-loader",
        options: {
          sourceMap: true,
          sassOptions: {
            outputStyle: "compressed",
          },
        },
      },
    ],
  },
```

## HTML

```sh
npm install --save-dev html-webpack-plugin
```

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");

// ...

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
```

## Images

Built-in

```js
// webpack.config.js
  {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  },
```

## Fonts

Built-in

```js
// webpack.config.js
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  },
```

## Dev Server

```sh
npm install --save-dev webpack-dev-server
```

```js
// webpack.config.js

  devServer: {
    static: './dist',
  },

  optimization: {
    runtimeChunk: 'single',
  },
```

```js
// package.json

"scripts": {
  "start": "webpack serve --open",
}
```
