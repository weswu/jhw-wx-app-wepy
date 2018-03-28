import wepy from 'wepy'

/**
 * param 将要转为URL参数字符串的对象
 * key URL参数字符串的前缀
 * encode true/false 是否进行URL编码,默认为true
 *
 * return URL参数字符串
 */
var urlEncode = function (param, key, encode) {
  if(param==null) return '';
  var paramStr = '';
  var t = typeof (param);
  if (t == 'string' || t == 'number' || t == 'boolean') {
    paramStr += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(param) : param);
  } else {
    for (var i in param) {
      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
      paramStr += urlEncode(param[i], k, encode);
    }
  }
  return paramStr;
};

const http = async (params = {}, url) => {
  console.log(url)
  if (url.indexOf('app.jihui88.com') > -1) {
    params.data = params.data || {}
    params.data.skey = wepy.getStorageSync('skey')
  }
  if (params.method === 'PUT') {
    url = url + '?' + urlEncode(params.data).substr(1)
    params.data = {}
  }
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: params.data || {},
    header: {'Content-type': 'application/x-www-form-urlencoded'}
  })
  if (res.data.msg === '未登陆1') {
    wx.navigateTo({
      url: '/pages/user/login'
    })
  }
  return res.data
}

module.exports = { http }
