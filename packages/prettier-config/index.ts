import type { Options } from 'prettier';

const options: Options = {
  /**
   * Include parentheses around a sole arrow function parameter.
   * - ref: https://prettier.io/docs/en/options.html#arrow-function-parentheses
   */
  arrowParens: 'avoid',

  /**
   * Put the `>` of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line
   * instead of being alone on the next line (does not apply to self closing elements).
   * - ref: https://prettier.io/docs/en/options.html#bracket-line
   */
  bracketSameLine: false,

  /**
   * Print spaces between brackets in object literals.
   * - ref: https://prettier.io/docs/en/options.html#bracket-spacing
   */
  bracketSpacing: true,

  /**
   * End of line.
   * - ref: https://prettier.io/docs/en/options.html#end-of-line
   */
  endOfLine: 'auto',

  /**
   * Use single quotes instead of double quotes in JSX.
   * - ref: https://prettier.io/docs/en/options.html#jsx-quotes
   */
  jsxSingleQuote: false,

  /**
   * Specify the line length that the printer will wrap on.
   * - ref: https://prettier.io/docs/en/options.html#print-width
   */
  printWidth: 80,

  /**
   * Change when properties in objects are quoted.
   * - ref: https://prettier.io/docs/en/options.html#quote-props
   */
  quoteProps: 'as-needed',

  /**
   * Print semicolons at the ends of statements.
   * - ref: https://prettier.io/docs/en/options.html#semicolons
   */
  semi: true,

  /**
   * Use single quotes instead of double quotes.
   * - ref: https://prettier.io/docs/en/options.html#quotes
   */
  singleQuote: true,

  /**
   * Specify the number of spaces per indentation-level.
   * - ref: https://prettier.io/docs/en/options.html#tab-width
   */
  tabWidth: 2,

  /**
   * Print trailing commas wherever possible in multi-line comma-separated syntactic structures.
   * (A single-line array, for example, never gets trailing commas.)
   * - ref: https://prettier.io/docs/en/options.html#trailing-commas
   */
  trailingComma: 'es5',

  /**
   * Indent lines with tabs instead of spaces.
   * - ref: https://prettier.io/docs/en/options.html#tabs
   */
  useTabs: false,
};

export = options;
