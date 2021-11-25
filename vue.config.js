module.exports = {
  lintOnSave:false,
  pages: {
    pages: {
      template: 'public/browser-extension.html',
      entry: './src/main.js',
      title: 'ATTA-Dream-Maker'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.js'
        },
        contentScripts: {
          entries: {
            content1:'src/utils/test.js'
          }
        }
      }
    }
  }
}
