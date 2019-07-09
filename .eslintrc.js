// eslint-disable-next-line to ignore the next line.
/* eslint-disable */

// module.exports = {
//     "env": {
//         "browser": true,
//         "es6": true,
//         "node": true
//     },
//     "extends": "plugin:vue/essential",
//     "globals": {
//         "Atomics": "readonly",
//         "SharedArrayBuffer": "readonly"
//     },
//     "parserOptions": {
//         "ecmaVersion": 2018,
//         "sourceType": "module"
//     },
//     "plugins": [
//         "vue"
//     ],
//     "rules": {}
// };

// module.exports = {}
module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}