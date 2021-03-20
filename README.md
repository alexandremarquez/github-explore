

## React

- yarn init -y
- yarn add react react-dom
- mkdir src public
- create file public/index.html

## Babel

- Instal Dev Dependencies

    ```
    yarn add @babel/core @babel/cli @babel/preset-env -D 
    ``` 

- Create babel.config.js 

    ```
    module.exports={
      presets:[
        '@babel/preset-env'
      ]
    }
    ```

- Create src/index.js

    ```js
    const user = { 
      name: 'Alexandre',
    }

    console.log(user.address?.street)
    ```

- Test babel 

    ```bash
    yarn babel src/index.js --out-file dist/bundle.js
    ```



-  Install babel preset-react

    ```bash
    yarn add @babel/preset-react -D
    ```

-  Add preset on babel config

    ```js
    module.exports={
      presets:[
        '@babel/preset-env',
        '@babel/preset-react'
      ]
    }
    ```

- Change index.js to react app.

    ```js
    import React from 'react';

    function App(){
      return <h1>Hello World</h1>
    }
    ```

## Webpack

-  Install Dev Dependencies.
 
    ``` 
    yarn add webpack webpack-cli babel-loader -D
    ```

- Create webpack.config.js

  ```js
  const path = require('path')

  module.exports = {
    entry: path.resolve(__dirname,'src','index.js'),
    output: {
      path: path.resolve(__dirname,'dist'),
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js','jsx']
    },
    module:{
      rules:[
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        }
      ],
    }
  }]
  ``` 

- Create src/App.js

  ```js
  export function App(){
  return <h1>Hello World</h1>
  }
  ```

- Import App.js

    ```
    import React from 'react';
    import {App} from './App'
    ```

- Test 

  ```
  yarn webpack
  ```

## ReactJS

- Add div root in index.html
- Add render in index.js
- Add conf runtime automatic to @babel/preset-react
- Add mode development in webpack config.

## Static HTML

- Remove script src dist/bundles.js
- Install html-webpack-plugin
- Add plugins in webpack conf.


## Webpack Dev Server

- Install dev dependence webpack-dev-server
- Add conf auto create bundle in webpack.config
  ```js
  devServer:{
    contentBase: path.resolve(__dirname,'public'),
  }
  ```

- Run with yarn webpack server and now it auto reload when save changes in src/*

## Source maps

- Add conf in webpack to view web code instead bundle

  ```js
  devtool: 'eval-source-map',
  ```
- Test add  error in App.js

  ```
  throw new Error('Whoops!')
  ```

# Dev & Production

- Create variable NODE.ENV

  ```
  const isDevelopment = proccess.env.NODE_ENV !== 'production';
  ``` 

- Devtool conditional

  ```js
  mode: isDevelopment ? 'development': 'production',
  devtool: isDevelopment ? 'eval-source-map': 'source-map,
  ```

- Load NODE_ENV Linux Mac

  ``` 
  NODE_ENV=production yarn webpack
  ```

- Load NODE_ENV Windows Linux Mac

  ```
  yarn add cross-env -D
  ```

- Create script dev
  ```
  "scripts":{
    "dev": "webpack serve",
    "build": "cross-env NODE_ENV=production webpack"
    },
  ```

## Import CSS file

- Create styles/global.css
- Install css-loader and style-loader
- Add rule for file *.css in webpack config.

### Using SASS

- Install sass-loader and node-sass
- Change rule css to scss with sass-loader
- Rename files css to scss and imports.

