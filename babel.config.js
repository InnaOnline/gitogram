module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
},

{
  presets: [
    '@babel/preset-env'
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import'
  ]
}