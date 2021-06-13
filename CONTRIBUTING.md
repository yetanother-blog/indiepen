# Contributing 🤓

## About the tech stack

- We use [Snowpack](https://www.snowpack.dev/) to spin up a local dev server and bundle assets
- We use plain HTML, CSS and JS to keep the footprint of the project as minimal as possible
- We use [Prism](https://prismjs.com/) for syntax highlighting

## Prerequisites

- [Node.js v16](https://nodejs.org/en/)

## Get started

```sh
# Get the code
$ > git clone git@github.com:yetanother-blog/indiepen.git
$ > cd indiepen

# Install dependencies
$ > npm install

# Spin up snowpack
$ > npm start
```

Go to http://localhost:8080 😇

## Testing

We use [Cypress](https://www.cypress.io/) to run end-to-end tests. Take a look at the `cypress/` folder and feel free to add tests for new features.

Running tests locally:

```sh
# Make sure the project runs locally
$ > npm start

# Run Cypress tests in another terminal
# This command will just execute the tests headlessly
$ > npm run test

# Run Cypress tests in an interactive session
# Helpful for debugging
$ > npm run test:dev
```

Head over to [Cypress](https://docs.cypress.io) to learn more about their tooling and philosophy.

## Linting

We use [Prettier](https://prettier.io/) for code style formatting. You can run `npm run lint` to check your changes.

## Generate font for embed

For the embed, we use a subset of the font Inter. Use the following commands to re-generate the font:

```sh
# Install dependencies for glyphhanger
pip install fonttools
pip install brotli

# Run glyphhanger to generate the font
npx glyphhanger --formats=woff2 --whitelist="INDEPCSJHTMLRU" --subset="node_modules/@fontsource/inter/files/inter-latin-900-normal.woff2" --css

# Move the font file to the embed folder
cp node_modules/@fontsource/inter/files/inter-latin-900-normal-subset.woff2 src/embed/font
```

The important part is, that we greenlisted the following characters: `INDEPCSJHTMLRU`. If we need to support more characters, then we need to update the list.

## Pipeline & Hosting

We use [Netlify](https://www.netlify.com/) as our hosting platform. In addition, we configured Netlify's git workflow to create deploy previews for every pull request. We also run checks before we deploy our application to Netlify:

- Lint the code
- Run end-to-end tests
- Run accessibility checks
- Run lighthouse audits

Take a look at the [netlify.toml](./netlify.toml) config for details.
