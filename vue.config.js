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
            twitter:['src/views/twitter/contentScript.js', 'src/views/twitter/init.js', 'src/views/twitter/injectWeb3.js'],
            // 图片编辑部分
            imageEdit:['src/views/imagesEdit/domEdit.js', 'src/views/imagesEdit/main.js']
          }
        }
      }
    }
  }
}
