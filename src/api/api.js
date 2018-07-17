import { http } from '@/utils/Http'

const host = 'https://www.jihui88.com'

const wxHost = 'https://wx.jihui88.net'

// 微信登录
const wxapplogin = (params) => http(params, wxHost + "/rest/api/user/wxapplogin");
// 账号登录
const login = (params) => http(params, wxHost + '/rest/api/user/wxAppLoginByUsernameAndPassword')
const logout = (params) => http(params, wxHost + '/rest/api/user/wxappLogout')
// 基本数据
const user = (params) => http(params, host + '/rest/api/user/detail')
const userInfo = (params) => http(params, host + '/rest/api/user/index')
const enterprise = (params) => http(params, host + '/rest/api/enterprise/detail')
const customData = (params) => http(params, host + '/rest/api/custom/detail')
const customUpdate = (params) => http(params, host + '/rest/api/custom/update')

// 站点数据
const staticList = (params) => http(params, host + '/rest/pc/api/baseLayout/list?page=1&pageSize=100&sortType=desc')
// 留言
const message = (params) => http(params, host + '/rest/api/message/list')
const messageDetail = (params) => http(params, host + '/rest/api/message/detail' + (params.id ? '/' + params.id : ''))
const messageBind = (params) => http(params, host + '/rest/api/message/bind/detail' + (params.data.enterpriseId ? '/' + params.data.enterpriseId : ''))
// 设置
const password = (params) => http(params, host + '/rest/api/user/detail/password')
const log = (params) => http(params, host + '/rest/api/log/list')
const serviceFeedback = (params) => http(params, host + '/rest/api/crm/feedback/msg_send')
// 相册
const album = (params) => http(params, host + '/rest/api/album/attr/list/' + params.id)
const albumCategory = (params) => http(params, host + '/rest/api/album/list?pageSize=100')
// 分类
const category = (params) => http(params, host + '/rest/api/' + params.type + '/categoryManage')
const categoryUpdate = (params) => http(params, host + '/rest/api/category/update')
const categoryDetail = (params) => http(params, host + '/rest/api/category/detail' + (params.id ? '/' + params.id : ''))
// 产品
const product = (params) => http(params, host + '/rest/api/product/list')
const productDetail = (params) => http(params, host + '/rest/api/product/detail/' + params.id)
// 新闻
const news = (params) => http(params, host + '/rest/api/news/list')
const newsDetail = (params) => http(params, host + '/rest/api/news/detail/' + params.id)
const newsUpdate = (params) => http(params, host + '/rest/api/news/update')
// 证书
const cert = (params) => http(params, host + '/rest/api/cert/list')
const certDetail = (params) => http(params, host + '/rest/api/cert/detail' + (params.id ? '/' + params.id : ''))
// 友情链接
const link = (params) => http(params, host + '/rest/api/link/list')
const linkDetail = (params) => http(params, host + '/rest/api/link/' + (params.method ? 'detail' : 'updateList') + (params.id ? '/' + params.id : ''))
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
// 服务缴费
const receiptList = (params) => http(params, host + '/rest/api/crm/receipt/list')
const receiptLog = (params) => http(params, host + '/rest/api/crm/receipt/log')
const journal = (params) => http(params, host + '/rest/api/crm/feedback/journal')
// 服务进度
const progress = (params) => http(params, host + '/rest/api/crm/feedback/list')
const progressDetail = (params) => http(params, host + '/rest/api/crm/feedback/detail/' + params.id)
// 积分
const point = (params) => http(params, host + '/rest/api/integral_record/list')
const pointRule = (params) => http(params, host + '/rest/api/integral_rule/list?page=1&pageSize=99')
const pointProduct = (params) => http(params, host + '/rest/api/point_product/detail/' + params.id)
const pointList = (params) => http(params, host + '/rest/api/point/list')
const pointRank = (params) => http(params, host + '/rest/api/point/rank')
// 推广
const spread = (params) => http(params, host + '/rest/api/poster/list?pageSize=72')
const spreadRank = (params) => http(params, wxHost + '/rest/api/comm/poster/userlist')
const posters = (params) => http(params, 'https://api.jihui88.net/qrcode_poster/api/poster')
// 微传单
const wcd = (params) => http(params, host + '/rest/api/wcd/list')
const wcdCase = (params) => http(params, host + '/rest/api/wcd/case')
// 微网站
const mobile = (params) => http(params, host + '/rest/api/mobile/list')
const mobileCase = (params) => http(params, host + '/rest/api/mobile/case')

module.exports = {
  wxapplogin,
  // 基本数据
  user, userInfo, enterprise, customData, customUpdate,
  login, logout,
  // 站点
  staticList,
  // 留言
  message, messageDetail, messageBind,
  // 设置
  password,
  log,
  serviceFeedback,
  // 相册
  album, albumCategory,
  // 产品
  product, productDetail,
  // 新闻
  news, newsDetail, newsUpdate,
  // 分类
  category, categoryUpdate, categoryDetail,
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
  data, purchase,
  // 服务缴费
  receiptList, receiptLog, journal,
  //服务进度
  progress, progressDetail,
  // 积分
  point, pointProduct, pointRule, pointList, pointRank,
  // 推广
  spread, spreadRank, posters,
  // 微传单
  wcd, wcdCase,
  // 微网站
  mobile, mobileCase
}
