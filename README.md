# 后台管理系统

> 这是一个用小程序编写的会员后台App。

[APP在线地址](http://app.jihui88.com)

### 技术栈
- [wepy](https://tencent.github.io/wepy/) 开发框架
- [WeUI](https://weui.io/) UI框架
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

app接口 https://app.jihui88.com

机汇网 https://wx.jihui88.net


### 下载图片
推广  https://api.jihui88.net

### 上传图片
https://app.jihui88.com

```javascript
------WebKitFormBoundarybSd1pePCMUd7Lhhh
Content-Disposition: form-data; name="Filedata"; filename="logo2.jpg"
Content-Type: image/jpeg


------WebKitFormBoundarybSd1pePCMUd7Lhhh
Content-Disposition: form-data; name="fileLen"

2346
------WebKitFormBoundarybSd1pePCMUd7Lhhh--
```

### webView
http://wwww.jihui88.com/webview.html?src=xxx


### 参考
[wxYuHanStore](https://github.com/dyq086/wxYuHanStore)

[leshare-shop-wepy](https://github.com/coolhwm/leshare-shop-wepy)
