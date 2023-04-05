# `@dulgi/prettier-config`

Shareable [prettier](https://prettier.io/) configs for web apps and libraries.

## Getting started

### Installation

Install Prettier and `@dulgi/prettier-config`:

```
npm install --save-dev prettier@~2.8.7 @dulgi/prettier-config
```

### Usage

prettier rules come bundled in `@dulgi/prettier-config`. To enable these rules, create `.prettierrc` in your project root and write config like below. See the [Prettier configuration docs](https://prettier.io/docs/en/configuration.html#sharing-configurations) for more details.

```json
// `.prettierrc`
"@dulgi/prettier-config"
```

```javascript
// `prettier.config.js` or `.prettierrc.js`
module.exports = "@dulgi/prettier-config";
```

## Extending

This configuration is not intended to be changed, but if you have a setup where modification is required, it is possible. Prettier does not offer an "extends" mechanism as you might be familiar from tools such as ESLint. See the [Sharing configurations](https://prettier.io/docs/en/configuration.html#sharing-configurations) for more details.

To extend a configuration you will need to use a `prettier.config.js` or `.prettierrc.js` file that exports an object:

```javascript
module.exports = {
  ...require("@dulgi/prettier-config"),
  semi: false,
};
```
