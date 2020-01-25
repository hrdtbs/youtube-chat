module.exports = {
    parserOptions: {
        ecmaVersion: 9,
        sourceType: "module"
    },
    env: {
        es6: true,
        browser: true
    },
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended"
    ],
    plugins: ["sort-imports-es6-autofix"],
    rules: {
        "sort-imports-es6-autofix/sort-imports-es6": [2, { 
            "ignoreCase": false,
            "ignoreMemberSort": false,
            "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
          }]
    },
    settings: {
        node: {
            tryExtensions: [".js"]
        }
    }
}
