# npm Cheatsheet

> npm packages

```sh
npm install --save-dev \
  webpack webpack-cli webpack-dev-server webpack-merge \
  html-webpack-plugin style-loader css-loader sass-loader sass raw-loader \
  eslint prettier eslint-config-prettier eslint-plugin-prettier \
  jest @babel/preset-env babel-jest @types/jest \
  @babel/plugin-transform-modules-commonjs
npx install-peerdeps --dev eslint-config-airbnb-base

# setup eslint
npx eslint --init
```

> webpack.common.js

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "img/[name].[ext]",
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Todo List: Odin Project #11",
      template: "./src/template.html",
      filename: "index.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
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
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/i,
        use: "raw-loader",
      },
    ],
  },
};
```

> webpack.dev.js

```js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  optimization: {
    runtimeChunk: "single",
  },
});
```

> webpack.prod.js

```js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
});
```

> package.json

```json
  "scripts": {
    "test": "jest --watchAll --verbose",
    "build": "webpack --config webpack.prod.js",
    "start": "webpack serve --open --config webpack.dev.js"
  },
```

> .prettierrc.json

```json
{
  "singleQuote": true
}
```

> .eslintrc.json

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": ["airbnb-base", "prettier"],
  "plugins": ["prettier"],
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "quotes": "off",
    "no-console": 1
  }
}
```

jsconfig.json

```json
// jest autocomplete in vs code
{
  "typeAcquisition": {
    "include": ["jest"]
  }
}
```

## Original notes

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
      template: "./src/template.html",
      filename: "index.html",
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

template.html

```html
<!-- page title -->
<title><%= htmlWebpackPlugin.options.title %></title>
```

.babelrc

```rc
{
  "presets": ["@babel/preset-env"],
  "env": {
  "test": {
  "plugins": ["@babel/plugin-transform-modules-commonjs"]
}
}
}
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

`./src/template.html`

```html
<title><%= htmlWebpackPlugin.options.title %></title>
```

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");

// ...

  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant Page: Odin Project #10",
      template: "./src/index.html",
      filename: "index.html",

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

## Jest

> installation

```js
npm i -D jest
```

```json
// package.json
"scripts": {
 "test": "jest --watchAll --verbose",
}
```

> tdd syntax with Jest

```js
// somefile.test.js
it("description", () => {
  expect(1).toBe(1); // pass
});

it("ordertotal, single item", () => {
  expect(
    orderTotal({
      items: [{ name: "dragon candy", price: 2, quantity: 3 }],
    }).toBe(6)
  );
});
```

> running jest

```sh
npm run test # single test
npm run watch # continuous feedback loop
```

### [Jest with Webpack](https://jestjs.io/docs/webpack)

```sh
npm install --save-dev @babel/preset-env babel-jest
```

```rc
<!-- .babelrc -->
{
  "presets": ["@babel/preset-env"]
}
```

```js
// jest.config.js
module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },
};
```

```js
// __mocks__/styleMock.js
module.exports = {};
```

```js
// __mocks__/fileMock.js
module.exports = "test-file-stub";
```

**Mocking CSS Modules**

```sh
npm install --save-dev identity-obj-proxy
```

```js
// jest.config.js | CSS MODULES
module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "identity-obj-proxy",
  },
};
```

**Configuring Jest to find our files**

```js
// jest.config.js
module.exports = {
  moduleFileExtensions: ["js", "jsx"],
  moduleDirectories: ["node_modules", "bower_components", "shared"],

  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
};
```
