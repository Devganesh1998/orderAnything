module.exports = {
    extends: ['airbnb', 'prettier', 'prettier/react'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
            impliedStrict: true,
            classes: true,
        },
    },
    env: {
        browser: true,
        node: true,
        jquery: true,
        jest: true,
    },
    rules: {
        'no-debugger': 0,
        'no-await-in-loop': 0,
        'func-names': 0,
        'no-return-assign': ['error', 'except-parens'],
        'no-restricted-syntax': [2, 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'no-unused-vars': [
            2,
            {
                ignoreRestSiblings: true,
                argsIgnorePattern: 'res|next|^err',
            },
        ],
        'prefer-const': [
            'error',
            {
                destructuring: 'all',
            },
        ],
        'arrow-body-style': [2, 'as-needed'],
        'no-unused-expressions': [
            2,
            {
                allowTaggedTemplates: true,
            },
        ],
        'no-param-reassign': [
            2,
            {
                props: false,
            },
        ],
        'no-console': 1,
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                assert: 'either',
            },
        ],
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx'],
            },
        ],
        'no-shadow': [
            2,
            {
                hoist: 'all',
                allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
            },
        ],
        quotes: [
            2,
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                tabWidth: 4,
                printWidth: 120,
                trailingComma: 'all',
            },
        ],
        'jsx-a11y/href-no-hash': 'off',
        'jsx-a11y/anchor-is-valid': [
            'warn',
            {
                aspects: ['invalidHref'],
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
    plugins: ['html', 'prettier', 'react-hooks'],
};
