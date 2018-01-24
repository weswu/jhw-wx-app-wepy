import { http } from '@/utils/Http'

const host = 'http://app.jihui88.com'

const wxHost = 'https://wx.jihui88.net'

//微信的code换取sessionKey
const wxJsCode2Session = (params) => http(params, wxHost + "/rest/api/shop/member/wxapplogin");
const user2session = (params) => http(params, apiMall + "/api/wechat/user2session?jsoncallback=?");
// 登录
const login = (params) => http(params, host + '/rest/api/user/login')
const logout = (params) => http(params, host + '/rest/api/user/logout')
// 基本数据
const user = (params) => http(params, host + '/rest/api/user/detail')
const userInfo = (params) => http(params, host + '/rest/api/order/home/list')
const enterprise = (params) => http(params, host + '/rest/api/enterprise/detail')
const employee = (params) => http(params, host + '/rest/api/crm/friend_emp')
// 静态化
const publish = (params) => http(params, wxHost + '/rest/static1/' + params.username + '/publish?type=' + params.type)
const publishMobile = (params) => http(params, wxHost + '/rest/mobileStatic/' + params.username + '/publish?type=page')
// 留言
const message = (params) => http(params, host + '/rest/api/message/list')
const messageDetail = (params) => http(params, host + '/rest/api/message/detail' + (params.id ? '/' + params.id : ''))
const messageBind = (params) => http(params, host + '/rest/api/message/bind/detail' + (params.data.id ? '/' + params.data.id : ''))
// 设置
const password = (params) => http(params, host + '/rest/api/user/detail/password')
const log = (params) => http(params, host + '/rest/api/log/list')
const serviceFeedback = (params) => http(params, 'http://crmyun.jihui88.com:9500/api/jihuifeedback.php')
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
// 域名绑定
const bind = (params) => http(params, host + '/rest/api/bind/list')
const bindDetail = (params) => http(params, host + '/rest/api/bind/detail' + (params.id ? '/' + params.id : ''))
// 会员
const member = (params) => http(params, host + '/rest/api/member/list')
const memberDetail = (params) => http(params, host + '/rest/api/member/detail' + (params.id ? '/' + params.id : ''))
const memberRank = (params) => http(params, host + '/rest/api/member/rank/list')
// 分销
const dMember = (params) => http(params, wxHost + '/wechat/cps/index.php/jihui_api/members/' + params.id + '/' + params.page + '/5' + (params.name ? '/' + params.name : ''))
const dData = (params) => http(params, wxHost + '/wechat/cps/index.php/jihui_api/ranking/' + params.id + '/' + params.index)
const dBouns = (params) => http(params, wxHost + '/wechat/cps/index.php/jihui_api/bouns/' + params.id + '/' + params.page + '/4')
// 订单
const order = (params) => http(params, host + '/rest/api/order/list')
const orderListDetail = (params) => http(params, host + '/rest/api/order/listDetail/' + params.id)
const orderDetail = (params) => http(params, host + '/rest/api/order/detail/' + params.id)
const orderExpress = (params) => http(params, host + '/rest/api/order/express')
const orderPrice = (params) => http(params, host + '/rest/api/order/priceDetail')
const orderUpdate = (params) => http(params, host + '/rest/api/order/update')
// 商城数据
const data = (params) => http(params, host + '/rest/api/order/data')
const purchase = (params) => http(params, host + '/rest/api/order/data/member_list')

module.exports = {
  wxJsCode2Session,
  user2session,
  login, logout,
  // 基本数据
  user, userInfo,
  enterprise,
  employee,
  // 静态化
  publish, publishMobile,
  // 留言
  message, messageDetail, messageBind,
  // 设置
  password,
  log,
  serviceFeedback,
  // 相册
  album, albumCategory,
  category,
  // 产品
  product, productDetail,
  // 新闻
  news, newsDetail,
  // 证书
  cert, certDetail,
  // 友情链接
  link, linkDetail,
  // 域名绑定
  bind, bindDetail,
  // 会员
  member, memberDetail, memberRank,
  // 分销
  dMember, dData, dBouns,
  // 订单
  order, orderListDetail, orderDetail, orderExpress, orderPrice, orderUpdate,
  // 商城数据
  data, purchase
}
