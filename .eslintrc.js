/**
 * @file eslint 配置文件
 * ESLint 中文文档：http://eslint.cn/docs/rules/eslint-plugin-vue: https://eslint.vuejs.org/
 * 百度 EFE 团队使用的 eslint 配置：https://github.com/ecomfe/eslint-config/blob/master/index.js
 * JavaScript 编码规范(百度): http://gitlab.baidu.com/fe/spec/blob/master/javascript.md#2-1
 * Vue 组件代码规范(百度): http://gitlab.baidu.com/fe/spec/blob/master/vue.md#2-1
 * iCode校验规则说明：http://bugbye.baidu.com/rules
 */
module.exports = {
  root: true,
  env: {
      browser: true,
      node: true,
      es6: true,
  },
  parserOptions: {
      parser: 'babel-eslint',
      sourceType: 'module'
  },
  parser: 'vue-eslint-parser',
  extends: 'eslint:recommended',
  rules: {
      'indent': [
          'error',
          4,
          {
              SwitchCase: 1,
          },
      ],
      'indent-legacy': 'off',
      'generator-star-spacing': [
          'error',
          {
              'before': false,
              'after': true,
          },
      ],
      // 'new-cap': [
      //     'error',
      //     {
      //         'capIsNewExceptions': [
      //             'T',
      //             'AddToFavoritesBar',
      //         ],
      //     },
      // ],
      'array-bracket-spacing': [
          'error',
          'never',
      ],
      'object-curly-spacing': [
          'error',
          'never',
      ],
      'arrow-parens': [
          'error',
          'as-needed',
      ],
      'no-console': 'warn',
      'no-constant-condition': 'warn',
      'comma-dangle': [
          0,
          {
              'arrays': 'always-multiline',
              'objects': 'always-multiline',
              'imports': 'always-multiline',
              'exports': 'always-multiline',
              'functions': 'never',
          },
      ],
      'no-debugger': 'error',
      'no-dupe-keys': 'warn',
      'no-empty-character-class': 'error',
      'no-ex-assign': 'error',
      'no-extra-boolean-cast': 'warn',
      'no-func-assign': 'warn',
      'no-inner-declarations': 'warn',
      'no-invalid-regexp': 'error',
      'no-negated-in-lhs': 'error',
      'no-obj-calls': 'error',
      'no-sparse-arrays': 'error',
      'no-unreachable': 'error',
      'use-isnan': 'error',
      'valid-typeof': 'error',
      'curly': [
          'error',
          'all',
      ],
      'eqeqeq': [
          'error',
          'allow-null',
      ],
      'guard-for-in': 'warn',
      'no-else-return': 'warn',
      'no-labels': [
          'warn',
          {
              'allowLoop': true,
          },
      ],
      'no-eval': 'warn',
      'no-extend-native': 'error',
      'no-extra-bind': 'warn',
      'no-implied-eval': 'warn',
      'no-iterator': 'error',
      'no-irregular-whitespace': 'warn',
      'no-lone-blocks': 'warn',
      'no-loop-func': 'warn',
      'no-multi-str': 'warn',
      'no-native-reassign': 'error',
      'no-new-wrappers': 'error',
      'no-octal': 'warn',
      'no-octal-escape': 'warn',
      'no-proto': 'error',
      'no-redeclare': 'warn',
      'no-self-compare': 'error',
      'no-unneeded-ternary': 'error',
      'no-with': 'warn',
      'radix': 'error',
      'wrap-iife': [
          'error',
          'any',
      ],
      'no-delete-var': 'warn',
      'no-dupe-args': 'error',
      'no-duplicate-case': 'error',
      'no-label-var': 'warn',
      'no-shadow-restricted-names': 'error',
      'no-undef': 'error',
      'no-undef-init': 'warn',
      'no-unused-vars': [
          'warn',
          {
              'vars': 'local',
              'args': 'none',
          },
      ],
      'no-use-before-define': [
          'error',
          'nofunc',
      ],
      'brace-style': [
          'warn',
          '1tbs',
          {},
      ],
      'comma-spacing': [
          'error',
          {
              'before': false,
              'after': true,
          },
      ],
      'comma-style': [
          'error',
          'last',
      ],
      'new-parens': 'warn',
      'no-array-constructor': 'error',
      'no-multi-spaces': [
          'error',
          {
              'exceptions': {
                  'Property': true,
                  'BinaryExpression': true,
                  'VariableDeclarator': true,
              },
          },
      ],
      'no-new-object': 'error',
      'no-spaced-func': 'error',
      'no-trailing-spaces': 'error',
      'no-extra-parens': 'off',
      'no-mixed-spaces-and-tabs': 'error',
      'one-var': [
          'error',
          'never',
      ],
      'operator-linebreak': [
          'error',
          'before',
      ],
      'quotes': [
          'error',
          'single',
      ],
      'semi': [
          'error',
          'always',
      ],
      'semi-spacing': 'error',
      'keyword-spacing': 'error',
      'key-spacing': [
          'error',
          {
              'beforeColon': false,
              'afterColon': true,
          },
      ],
      'space-before-function-paren': [
          'error',
          {
              'anonymous': 'always',
              'named': 'never',
          },
      ],
      'space-before-blocks': [
          'error',
          'always',
      ],
      'computed-property-spacing': [
          'error',
          'never',
      ],
      'space-in-parens': [
          'error',
          'never',
      ],
      'space-unary-ops': 'warn',
      'spaced-comment': [
          'error',
          'always',
          {
              'exceptions': [
                  '-',
                  '+',
                  '\'',
              ],
              'block': {
                  'balanced': true,
              },
          },
      ],
      'max-nested-callbacks': [
          'warn',
          3,
      ],
      'max-depth': [
          'warn',
          6,
      ],
      'max-len': [
          'error',
          180,
          4,
          {
              'ignoreUrls': true,
              'ignoreComments': true,
          },
      ],
      'max-params': [
          'warn',
          6,
      ],
      'space-infix-ops': 'error',
      'dot-notation': [
          'error',
          {
              'allowKeywords': true,
              'allowPattern': '^catch$',
          },
      ],
      'arrow-spacing': 'error',
      'constructor-super': 'error',
      'no-confusing-arrow': [
          'error',
          {
              'allowParens': true,
          },
      ],
      'no-class-assign': 'warn',
      'no-const-assign': 'error',
      'no-dupe-class-members': 'warn',
      'no-this-before-super': 'warn',
      'no-var': 'warn',
      'no-duplicate-imports': 'warn',
      'prefer-rest-params': 'error',
      'unicode-bom': 'warn',
      'max-statements-per-line': 'error',
      'no-useless-constructor': 'warn',
  },
  overrides: [
      {
          files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
          env: {
              jest: true
          }
      }
  ]
};