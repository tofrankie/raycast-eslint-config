const prettier = require("eslint-config-prettier/flat");
const typescript = require("typescript-eslint");
const raycast = require("@raycast/eslint-plugin");
const js = require("@eslint/js");
const globals = require("globals");
const packageSort = require("./sort");

const GLOB_SRC = ["**/*.?([cm])[jt]s?(x)"];
const GLOB_TS = ["**/*.?([cm])ts?(x)"];

module.exports = [
  { ignores: ["**/raycast-env.d.ts"] },
  {
    ...js.configs.recommended,
    files: GLOB_SRC,
  },
  ...typescript.configs.recommended.map((config) => ({
    ...config,
    files: config.files ?? GLOB_TS,
  })),
  {
    files: GLOB_SRC,
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.node,
      },
    },
  },
  ...raycast.configs.recommended.map((config) => ({
    ...config,
    files: GLOB_TS,
  })),
  {
    ...prettier,
    files: GLOB_SRC,
  },
  ...packageSort,
];
