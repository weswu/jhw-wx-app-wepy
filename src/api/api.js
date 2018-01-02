import { http } from '@/utils/http'

const host = 'http://app.jihui88.com/'

const getUser = (params) => http(params, host + 'rest/api/user/detail')

module.exports = {
  getUser
}
