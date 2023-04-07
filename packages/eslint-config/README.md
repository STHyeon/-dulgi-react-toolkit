# `@dulgi/eslint-config`

Shareable [eslint](https://eslint.org/docs/latest/) configuration for web apps and libraries.

## Install

```bash
yarn add @dulgi/eslint-config
```

### Peer Dependencies

You need to install all peer dependencies via the [install-peerdepth](https://github.com/nathanhleung/install-peerdeps) CLI tool.

```bash
$ npx install-peerdeps @dulgi/eslint-config --yarn --only-peers --dev
```

#### Title: Fixing the "@typescript-eslint" plugin conflict error

Description: If you see an error message like the one above, type the following command in the terminal:

```bash
npm install --save-dev eslint-config-react-app
```

## Usage

Create an '.eslintrc` or '.eslintrc.js` file in the root of your project, and extend shareable settings.

```js
module.exports = {
  extend: '@dulgi/eslint-config',

  // or

  extends: [
    '@dulgi/eslint-config',
    'plugin:cypress/recommended',
    //...
  ],
};
```
