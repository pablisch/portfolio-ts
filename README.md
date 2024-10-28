# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Portfolio TS

## Tests

### Component tests

The component tests use vitest, the React testing library and jest-dom

Run `npm test` to run continual tests.
Stop continual tests using `ctrl-c`.

The current `test` script runs `vitest --globals --reporter verbose`.

You may also run tests in continuous WATCH:
`npx vitest`
`npx vitest --reporter=verbose` for maximum feedback
`npx vitest --reporter=basic` for minimum feedback
`npx vitest --globals` including global imports, e.g. of `describe` which should not be needed here.

And the same options for running all tests ONCE:
`npx vitest --run`
`npx vitest --reporter=verbose --run` for maximum feedback
`npx vitest --reporter=basic --run` for minimum feedback
`npx vitest --globals --run` including global imports, e.g. of `describe` which should not be needed here.

You may also run select tests with a regex pattern:
`npx vitest left` will run any test with `left` in the path or filename
`npx vitest link` will run any test with `link` in the path or filename
**NOTE**: This is case insensitive and since it also includes the filepath (at least to some extent) you need to be aware of what you may be including.
