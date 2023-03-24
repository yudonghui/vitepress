# vitepress

作者项目：https://github.com/ox4f5da2/seven-bit-docs.git

然后安装依赖

 **pnpm i**

对了如果没有安装 pnpm 的可以全局安装一下，运行如下命令即可：

 **npm i pnpm -g**

如果提示说无权限写入文件夹的话那就加 sudo 安装即可

然后运行命令启动项目
 **pnpm run docs:dev**

最后打开链接应该就能看到了，希望大家喜欢这个文档网站
顺便说一下，我还写了一个刷算法题的网站，都是用 js 写的，网址在这里，想看的可以看看，这是用 vuepress 写的，如果您有 vuepress 基础那么会非常容易上手，好了废话不多说，接下来就介绍怎么使用 vitepress。

## 创建项目
首先选一个自己喜欢的文件及，然后在这个文件夹里创建一个 vitepress 项目文件夹，自己想叫啥叫啥，然后进入这个文件夹即可，如果大家觉得麻烦可以进入文件夹后运行如下命令：

 **mkdir vitepress && cd vitepress**

然后使用自己喜欢的包管理方式，可以是 npm、yarn、pnpm，初始化项目即可：

**npm -> npm init -y**

**yarn -> yarn init**

**pnpm -> pnpm init**

### 安装 vitepress
为了方便书写教程，之后的安装命令都是用 pnpm
安装 vitepress 使用如下命令：
 **pnpm add -D vitepress vue**

然后创建一个 md 文档：

 **mkdir docs && echo '# Hello VitePress' > docs/index.md**

启动项目
将以下的内容写入 package.json 文件：

{

...
   "scripts": {

    "docs:dev": "vitepress dev docs",

    "docs:build": "vitepress build docs",

    "docs:preview": "vitepress preview docs"

  },

  ...

}

然后本地启动服务：
**pnpm run docs:dev**
VitePress 将在 http://localhost:5173 上展示你自己的网站，并且是热更新的。

vitepress 的目录结构
.
> docs
>> .vitepress
>>> theme
>>>> index.js
>>> config.js
>> index.md
> .gitignore
> node_modules
> package.json

大概是这么个结构，其实没有具体规定，其实只要路径对匹配了就行了，但是 .vitepress 必须有，然后 config.js 也要有，否则没办法配置了。

💡 注意事项
如果 config.js 和 index.js 文件中没有内容的话，页面是无法显示的，应该删除或者添加相关配置，这个在以后会慢慢讲解。