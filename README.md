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

### 引入的框架（vue-cli-plugin-browser-extension） background.js，content_scripts：
```
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
```

### 然后需要在mainifest.json中进行引入：
```
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
```
### injected-script：
```
通过DOM操作的方式向页面注入的一种JS，使当前链接能够访问当前页面的js
injected建议放在静态文件夹中，使用：
mainifest.json中引入：
   "web_accessible_resources":["injected.js"]
```


### 引入的图片编辑器（toast-ui），可自定义部分：
```
common.bi.image - 品牌图标图片
 common.bisize.width - 图标图像宽度
 common.bisize.height - 图标图像高度
 common.backgroundImage - 背景图片
 common.backgroundColor - 背景颜色
 common.border - 全区域边框样式
 header.backgroundImage - 标题区域背景
 header.backgroundColor - 标题区域背景颜色
 header.border - 标题区域边框样式
 loadButton.backgroundColor - 加载按钮背景颜色
 loadButton.border - 加载按钮边框样式
 loadButton.color - 加载按钮前景色
 loadButton.fontFamily - 加载按钮字体类型
 loadButton.fontSize - 加载按钮字体大小
 downloadButton.backgroundColor - 下载按钮背景颜色
 downloadButton.border - 下载按钮边框样式
 downloadButton.color - 下载按钮前景色
 downloadButton.fontFamily - 下载按钮字体类型
 downloadButton.fontSize - 下载按钮字体大小
 menu.normalIcon.color - 默认图标的菜单正常颜色
 menu.normalIcon.path - 菜单普通图标 svg 包文件路径
 menu.normalIcon.name - 菜单普通图标 svg 包名称
 menu.activeIcon.color - 默认图标的菜单活动颜色
 menu.activeIcon.path - 菜单活动图标 svg 包文件路径
 menu.activeIcon.name - 菜单活动图标 svg 包名称
 menu.disabled.color - 默认图标的菜单禁用颜色
 menu.disabled.path - 菜单禁用图标 svg 包文件路径
 menu.disabled.name - 菜单禁用图标 svg 包名称
 menu.hover.color - 菜单默认图标悬停颜色
 menu.hover.path - 菜单悬停图标 svg 包文件路径
 menu.hover.name - 菜单悬停图标 svg 包名称
 menu.iconSize.width - 菜单图标大小宽度
 menu.iconSize.height - 菜单图标大小高度
 submenu.backgroundColor - 子菜单区域背景颜色
 submenu.partition.color - 子菜单分区线颜色
 submenu.normalIcon.color - 默认图标的子菜单正常颜色
 submenu.normalIcon.path - 子菜单默认图标 svg 包文件路径
 submenu.normalIcon.name - 子菜单默认图标 svg 包名称
 submenu.activeIcon.color - 默认图标的子菜单活动颜色
 submenu.activeIcon.path - 子菜单活动图标 svg 包文件路径
 submenu.activeIcon.name - 子菜单活动图标 svg 包名称
 submenu.iconSize.width - 子菜单图标大小宽度
 submenu.iconSize.height - 子菜单图标大小高度
 submenu.normalLabel.color - 子菜单默认标签颜色
 submenu.normalLabel.fontWeight - 子菜单默认标签字体粗细
 submenu.activeLabel.color - 子菜单活动标签颜色
 submenu.activeLabel.fontWeight - 子菜单活动标签字体粗细
 checkbox.border - 复选框边框样式
 checkbox.backgroundColor - 复选框背景颜色
 range.pointer.color - 范围控制指针颜色
 range.bar.color - 范围控制栏颜色
 range.subbar.color - 范围控制子栏颜色
 range.value.color - 范围数字框字体颜色
 range.value.fontWeight - 范围数字框字体粗细
 range.value.fontSize - 范围数字框字体大小
 range.value.border - 范围编号框边框样式
 range.value.backgroundColor - 范围数字框背景颜色
 range.title.color - 范围标题字体颜色
 range.title.fontWeight - 范围标题字体粗细
 colorpicker.button.border - 颜色选择器按钮边框样式
 colorpicker.title.color - 颜色选择器按钮标题字体颜色 
```