module.exports = {
  lintOnSave:false,
  pages: {
    pages: {
      template: 'public/browser-extension.html',
      entry: './src/pages/main.js',
      title: 'Pages'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.js'
        }
      }
    }
  }
}
