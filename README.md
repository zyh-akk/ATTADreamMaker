# my-extension

## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Compiles and minifies for production
```
pnpm run build
```

### Lints and fixes files
```
pnpm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

background.js，content_scripts：
首先在：vue.config中进行设置：
pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.js'
        },
        contentScripts: {
          entries: {
            testDom1:'src/views/testDom/test.js',
          }
        }
      }
    }
  }
打包后在dist文件夹下的js文件夹生成background和testDom1.js

然后需要在mainifest.json中进行引入：
"content_scripts": [
    {
      "matches": ["https://twitter.com/*"],//在哪些网页中生效
      "js": ["./jq.min.js","./js/testDom1.js","./js/testDom2.js","./js/testDom3.js"],//顺序一定要注意不能乱
      "run_at": "document_end"//js加载时机
    }
  ],
  "background": {
    "scripts": [
      "./js/background.js"
    ]
  },
injected-script：
通过DOM操作的方式向页面注入的一种JS，使当前链接能够访问当前页面的js
injected建议放在静态文件夹中，使用：
mainifest.json中引入：
   "web_accessible_resources":["injected.js"]