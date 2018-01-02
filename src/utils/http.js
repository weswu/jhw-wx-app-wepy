import wepy from 'wepy'

const http = async (params = {}, url) => {
  console.log(url)
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: params.data || {},
    header: {'Content-type': 'application/json'}
  })
  return res
}

module.exports = { http }
