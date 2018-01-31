# 后台管理系统

> 这是一个用小程序编写的会员后台App。

[在线地址](http://app.jihui88.com)

### 技术栈
- [wepy](https://tencent.github.io/wepy/) 开发框架
- [小程序](http://mp.weixin.qq.com/debug/wxadoc/dev/) 开发文档
- [阿里图标](http://iconfont.cn) css字体图标

## 运行截图
无

## 安装运行（Build Setup）

``` bash
# 全局安装WePY
npm install wepy-cli -g

# 生成Demo开发项目
wepy new file-name

# 开启实时编译
wepy build --watch
```

## 代码

### 请求

```javascript
sleep (s) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise resolved')
    }, s * 1000)
  })
}

async testAsync () {
  const data = await this.sleep(3)
  console.log(data)
}
```

### 按钮
<button @tap="plus('a')" size="mini">  +  </button>

### 请求接口
http://crmyun.jihui88.com:9500

http://app.jihui88.com

https://wx.jihui88.net   ===   http://www.jihui88.com

### 下载推广图片
https://api.jihui88.net

### 上传接口
http://app.jihui88.com
