module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        "@nuxtjs/eslint-config-typescript",
        "plugin:nuxt/recommended",
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
        "array-bracket-spacing": ["error", "never"],
        "arrow-spacing": "error",
        "brace-style": ["error", "stroustrup"],
        "comma-dangle": ["error", {
            arrays: "always-multiline",
            objects: "always-multiline",
            imports: "always-multiline",
            exports: "always-multiline",
            functions: "never",
        }],
        eqeqeq: ["error", "smart"],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        indent: ["warn", 4, {
            SwitchCase: 1,
        }],
        "keyword-spacing": "error",
        "max-len": ["warn", {
            code: 120,
            ignorePattern: "^\\s*import.*from.*;\\s*$", // ignore long imports
        }],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-inferrable-types": ["warn", {
            ignoreParameters: true,
        }],
        "no-mixed-operators": "error",
        "no-trailing-spaces": "error",
        "@typescript-eslint/no-unused-vars": "warn",
        "object-curly-spacing": ["error", "always"],
        "prefer-destructuring": "error",
        "prefer-template": "error",
        semi: ["error", "always"],
        quotes: ["error", "double"],
    },
};
