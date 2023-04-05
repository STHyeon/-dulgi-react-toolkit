# `@dulgi/prettier-config`

Shareable [prettier](https://prettier.io/) configuration for web apps and libraries.

## Getting started

### Install

Install Prettier and `@dulgi/prettier-config`:

```
npm install --save-dev prettier@~2.8.7 @dulgi/prettier-config
```

### Usage.

To use, create the configuration files (.prettierrc, prettier.config.js, .prettierrc.js) in the root of your project and configure them like below.

```json
// `.prettierrc`
"@dulgi/prettier-config"
```

```javascript
// `prettier.config.js` or `.prettierrc.js`
module.exports = "@dulgi/prettier-config";
```

## Extensions

Use the following to add additional settings or change existing ones.

To extend the configuration, you must use a `prettier.config.js` or `.prettierrc.js` file that exports objects:

```javascript
module.exports = {
  ...require("@dulgi/prettier-config"),
  ...abc: true
};
```
