**`webpack-config`**

Project setup with React (JSX) support using Babel automatic runtime setting.

Features include:

- `@babel/core`: JavaScript transpiler to convert JavaScript into a version that's compatible with all browsers.
- `babel-loader`: Connects Babel to webpack's build process.
- `@babel/preset-env`: Plugins bundled into a preset that converts JavaScript features into compatible syntax.
- `@babel/preset-react`: Converts JSX syntax into plain old JavaScript.
- `css-loader`: To import `.css` files into javascript.
- `Sass`: `scss` and `.sass` formats through `sass-loader` package.
- `webpack`: Automatically inlining images less than 8kb into the javascript bundle output.
- `webpack-dev-server`: Transforms source code and serve it on a web server.
- `html-webpack-plugin`: An extension to webpack that adds the basic index html file.
- `clean-webpack-plugin` For automatic cleanup of the output directory (`dist/`) on each build.

**Production Build**

```
npm run build
```

**Development Build**

```
npm run build-dev
```

**Development Build, watching for file changes**

```
npm run watch
```

**Development Server on port :8080**

```
npm start
```

**See output without browser**

After running a build command, you can see the output without opening a browser by running:

```
node dist/main.js
```
