// eslint.config.js
import js from "@eslint/js";

export default [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: {
        module: "writable",
        require: "readonly",
        exports: "writable",
        __dirname: "readonly",
        __filename: "readonly",
        process: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error"
    }
  }
];