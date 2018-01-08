import { http } from '@/utils/http'

const host = 'http://app.jihui88.com'

//微信的code换取sessionKey
const wxJsCode2Session = (params) => http(params, "https://wx.jihui88.net/rest/api/shop/member/wxapplogin");
const user2session = (params) => http(params, apiMall + "/api/wechat/user2session?jsoncallback=?");

const login = (params) => http(params, host + '/rest/api/user/login')
const getUser = (params) => http(params, host + '/rest/api/user/detail')
const setUser = (params) => http(params, host + '/rest/api/user/detail')
// 公司简介
const setEnterprise = (params) => http(params, host + '/rest/api/enterprise/detail')
// 留言
const getMessage = (params) => http(params, host + '/rest/api/message/list')


module.exports = {
  wxJsCode2Session,
  user2session,
  login,
  getUser,
  getMessage
}
