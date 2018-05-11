module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
        "browser": true,
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/prop-types": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "guard-for-in": 0,
        "no-restricted-syntax": 0,
        "class-methods-use-this": 0,
        "no-unused-vars": 1,
        "react/no-unused-state": 1,
        "react/prefer-stateless-function": 1,
    }
};