module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    camelcase: 'off',
    quotes: 'off',
    semi: 'off',
    eqeqeq: 'off',
    curly: 'off',
    'no-unused-vars': 'warn',
    'arrow-parens': 'off',
    'prefer-const': 'off',
    'comma-dangle': 'off',
    'no-new': 'off',
    'space-before-function-paren': 'off',
    'vue/no-v-html': 'off',
    'import/no-named-as-default-member': 'off',
    'vue/html-indent': 'off',
    'vue/max-attributes-per-line': 'off',
    'control-character-in-input-stream': 'off',
    'vue/html-self-closing': 'off',
    'vue/mustache-interpolation-spacing': 'off',
    'vue/attributes-order': 'off',
    'vue/require-prop-types': 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'nuxt/no-cjs-in-config': 'off',
    'import/order': 'off',
    'vue/comment-directive': 'off',
    'vue/order-in-components': 'off',
    'vue/require-default-prop': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-unused-components': 'warn',
    "semi-spacing": 'off'
  },
  globals: {
    $nuxt: true
  }
}
