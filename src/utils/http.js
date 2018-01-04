import wepy from 'wepy'

const http = async (params = {}, url) => {
  console.log(url)
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
