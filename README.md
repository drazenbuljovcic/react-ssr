# react-ssr

## Prerequisites

NodeJS (install => nodejs.org)

## Instalation

npm i

## Development

Start express server by running:

npm start:dev

In another terminal run:

npm run watch

which will tell webpack to watch out for any changes in files in the ./src folder.
Webpack will output the files to the ./dist folder, which will run a restart of the nodemon server and refresh the browser page.

To output production file bundles with optimizations run:

npm run build

And run the server:

npm start