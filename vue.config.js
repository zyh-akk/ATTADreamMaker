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
            testDom:['src/views/testDom/test.js', 'src/views/testDom/cs-init.js', 'src/views/testDom/injectWeb3.js'],
            // 图片编辑部分
            // imageEdit:['src/views/imagesEdit/domEdit.js', 'src/views/imagesEdit/main.js']
          }
        }
      }
    }
  }
}
