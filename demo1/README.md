
# Weex To-do list app

A demo to-do list app, powered by Weex and Vue.

## Compile

Install the dependencies:

```
npm install
```

Compile the source code:

+ `npm run build` # Compile the source code for web platform and native platform.
+ `npm run dev` # Watch mode for `npm run build`.

Copy the bundle file:

+ `npm run copy:android` # Copy generated bundle file to the assets of Android project.
+ `npm run copy:ios` # Copy generated bundle file to the assets of iOS project.
+ `npm run copy` # Run both `copy:andriod` and `copy:ios`.

More npm scripts will be find in the `package.json`.

### Start Web Service

```
npm run serve
```

The server is listening on 1337. Visit http://127.0.0.1:1337/index.html can preview the app on browser.

 > NOTE: Currently the vue renderer is not ready, the web page isn't rendering by Vue components.

### 适用范围

 web

