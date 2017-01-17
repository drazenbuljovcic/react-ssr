# react-ssr

## Prerequisites

NodeJS (install => nodejs.org)

## Instalation

npm i

## Development

Both options include ssr.

For Hot module reloading run:

npm run start:dev-hmr

or

Start express server by running:

npm run start:dev

In another terminal run:

npm run watch

which will tell webpack to watch out for any changes in files in the ./src folder.
Webpack will output the files to the ./dist folder, which will run a restart of the nodemon server and refresh the browser page.

## Production

To output production file bundles with optimizations run:

npm run build

Running the server, but beforehand building a fresh production bundle:

npm start