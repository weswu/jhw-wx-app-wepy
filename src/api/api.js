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
const getMessage = (params) => http(params, host + '/rest/api/message/list')
// 设置
const password = (params) => http(params, host + '/rest/api/user/detail/password')
const logout = (params) => http(params, host + '/rest/api/user/logout')
const getLog = (params) => http(params, host + '/rest/api/log/list')
const serviceFeedback = (params) => http(params, 'http://crmyun.jihui88.com:9500/api/jihuifeedback.php')
// 服务



module.exports = {
  wxJsCode2Session,
  user2session,
  login,
  getUser,
  getEmployee,
  getMessage,
  // 设置
  password,
  logout,
  getLog,
  serviceFeedback
}
