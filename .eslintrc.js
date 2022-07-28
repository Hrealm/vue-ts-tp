module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/typescript', 'eslint:recommended', '@vue/prettier/@typescript-eslint'],
  rules: {
    'template-curly-spacing': 'off',
    // indent: 'off',
    indent: [
      'error',
      2,
      {
        ignoredNodes: ['TemplateLiteral']
      }
    ],
    // 组件名称统一 kebab-case || PascalCase
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: []
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'vue/singleline-html-element-content-newline': 0, // 在单行元素的内容前后需要换行符
    'vue/multiline-html-element-content-newline': 0, // 在多行元素的内容之前和之后需要换行符
    'import/no-unresolved': 0,
    'import/extensions': 0,
    camelcase: 0,
    'no-unused-expressions': 0,
    'no-unused-vars': 0,
    'no-shadow': 0,
    'no-use-before-define': 0,
    'vue/comment-directive': 0,
    'import/prefer-default-export': 0,

    'vue/html-closing-bracket-newline': 'off', // html右括号在新的一行
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    'no-mixed-spaces-and-tabs': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 'off',
    'no-mixed-operators': 'off',
    'max-len': [1, 300],
    'default-case': 0,
    'func-names': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 'off',
    'no-lonely-if': 0,
    'import/no-extraneous-dependencies': 0,
    'global-require': 0,
    'prefer-promise-reject-errors': 'off',
    'consistent-return': 0,
    'no-prototype-builtins': 0,
    'no-restricted-globals': 0,
    'class-methods-use-this': 0,
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    semi: [2, 'never'], // 不使用分号
    'comma-dangle': [2, 'never'] // 逗号不使用悬挂
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
