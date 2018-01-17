import { http } from '@/utils/Http'

const host = 'http://app.jihui88.com'

//微信的code换取sessionKey
const wxJsCode2Session = (params) => http(params, "https://wx.jihui88.net/rest/api/shop/member/wxapplogin");
const user2session = (params) => http(params, apiMall + "/api/wechat/user2session?jsoncallback=?");

const login = (params) => http(params, host + '/rest/api/user/login')
const getUser = (params) => http(params, host + '/rest/api/user/detail')
const setUser = (params) => http(params, host + '/rest/api/user/detail')
const getEmployee = (params) => http(params, host + '/rest/api/crm/friend_emp')
// 公司简介
const setEnterprise = (params) => http(params, host + '/rest/api/enterprise/detail')
// 留言
const message = (params) => http(params, host + '/rest/api/message/list')
// 设置
const password = (params) => http(params, host + '/rest/api/user/detail/password')
const logout = (params) => http(params, host + '/rest/api/user/logout')
const log = (params) => http(params, host + '/rest/api/log/list')
const serviceFeedback = (params) => http(params, 'http://crmyun.jihui88.com:9500/api/jihuifeedback.php')
// 服务

// 相册
const album = (params) => http(params, host + '/rest/api/album/attr/list/' + params.id)
const albumCategory = (params) => http(params, host + '/rest/api/album/list?pageSize=100')
// 分类
const category = (params) => http(params, host + '/rest/api/' + params.type + '/categoryManage')
// 产品
const product = (params) => http(params, host + '/rest/api/product/list')
const productDetail = (params) => http(params, host + '/rest/api/product/detail/' + params.id)
// 新闻
const news = (params) => http(params, host + '/rest/api/news/list')
const newsDetail = (params) => http(params, host + '/rest/api/news/detail/' + params.id)
// 证书
const cert = (params) => http(params, host + '/rest/api/cert/list')
const certDetail = (params) => http(params, host + '/rest/api/cert/detail' + (params.id ? '/' + params.id : ''))
// 友情链接
const link = (params) => http(params, host + '/rest/api/link/list')
const linkDetail = (params) => http(params, host + '/rest/api/' + (params.method ? 'updateList' + params.id : 'link') + '/detail' + (params.id ? '/' + params.id : ''))



module.exports = {
  wxJsCode2Session,
  user2session,
  login,
  getUser,
  getEmployee,
  message,
  // 设置
  password,
  logout,
  log,
  serviceFeedback,
  // 相册
  album,
  albumCategory,
  category,
  // 产品
  product,
  productDetail,
  // 新闻
  news,
  newsDetail,
  // 证书
  cert,
  certDetail,
  // 友情链接
  link,
  linkDetail
}
