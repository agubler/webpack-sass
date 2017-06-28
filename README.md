### Example using SASS and Webpack2

Project using Typescript, SASS pre-processor and Webpack 2

The entry point for application is `app.ts` and for SASS is `app.scss` that are extracted into separate bundles and injected into the `index.html`


Install the project dependencies:

```shell
npm install
```

Run the webpack build from the project root:

```shell
webpack
```

Or run the webpack dev server, that will watch files and serve the project on `localhost:9000`:

```shell
./node_modules/.bin/webpack-dev-server
```

This will recompile and reload the browser when a file in the project is updated, try updating the `background` in the SASS.





