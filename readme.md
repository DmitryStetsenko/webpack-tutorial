1. install
npm init -y
npm i webpack -D
npm i webpack-cli webpack-dev-server

2. scripts

3. webpack.config.js
.browserslistrc

4. HTML
plugin: HtmlWebpackPlugin 
loader (hotreload) : html-loader
index.js -> import './index.html'

5. CSS (/\.css$/i)  npm i -D style-loader css-loader
 
loader:
  style-loader (css -js- => html)
  css-loader
index.js -> import './index.css'

css -> in files (not html <styles>)
plugin: mini-css-extract-plugin

6. SCSS (/\.(c|sa|sc)ss$/i)
loader: sass-loader sass

7. POST CSS (autoprefixe, minify)
loader: postcss-loader postcss
plugin: postcss-preset-env

8. DEVSERVER

9. Babel for JS
loader: babel-loader @babel/core @babel/preset-env

10. FONTS (ttf|otf|woff2?)

11. IMG Assets
img on js -> rules

12. IMG minimize image-webpack-loader
npm install image-webpack-loader --save-dev









