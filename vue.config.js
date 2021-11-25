module.exports = {
  lintOnSave:false,
  pages: {
    pages: {
      template: 'public/index.html',
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
            testDom1:'src/views/testDom/test.js',
            testDom2:'src/views/testDom/cs-init.js',
            testDom3:'src/views/testDom/injectWeb3.js'
          }
        }
      }
    }
  }
}
