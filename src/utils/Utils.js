

/*
 * @author: wes
 * @date: 2018-1-17
 * @desc: 删除单个数组
*/
const del = (ctx, id, text) => {
  ctx.list.forEach((item, index, arr) => {
    if (item.id === id) {
      arr.splice(index, 1)
    }
  })
  ctx.count = ctx.count - 1
  text && wx.setNavigationBarTitle({
    title: text + '(' + ctx.count + ')'
  })
  ctx.$apply()
};


/*
 * @author: wes
 * @date: 2018-1-17
 * @desc: 数组相加
*/
const addAll = (a, b) => {
  if (b.length === 0) return
  for (let i = 0; i < b.length; i++) {
    a.push(b[i])
  }
}
const listTwo = (ctx, json, text) => {
  ctx.count = json.attributes.count
  if (json.attributes.data.length === 0) {
    ctx.more.empty = true
  } else {
    ctx.more.empty = false
  }
  text && wx.setNavigationBarTitle({
    title: text + '(' + ctx.count + ')'
  })
}
/*
 * @author: wes
 * @date: 2018-1-17
 * @desc: 滚动加载数据
*/
const scrollList = (ctx, json, text, searchData) => {
  if (json.success) {
    addAll(ctx.list, json.attributes.data)
    ctx.pageSize = ctx.pageSize || 16
    let isOnePage = false
    if (searchData && ctx.searchData.page === 1){
      isOnePage = true
      ctx.searchData.pageSize = ctx.searchData.pageSize || 16
    } else if(ctx.page === 1){
      isOnePage = true
    }
    if (isOnePage) {
      ctx.count = json.attributes.count
      if (json.attributes.data.length === 0) {
        ctx.more.empty = true
      } else {
        ctx.more.empty = false
      }
      text && wx.setNavigationBarTitle({
        title: text + '(' + ctx.count + ')'
      })
    }
    let pageSize = ctx.pageSize
    if (searchData){
      pageSize = ctx.searchData.pageSize
    }
    if (json.attributes.data.length < pageSize) { ctx.more.reachBottom = true } else { ctx.more.reachBottom = false }
  } else {
    ctx.refresh = false
  }
  ctx.more.loading = false
  ctx.$apply()
}

/*
 * @author: wes
 * @date: 2018-1-24
 * @desc: 金额,过滤2位
*/
const price = (v) => {
  var f = parseFloat(v)
  if (isNaN(f)) {
    return
  }
  f = Math.round(v * 100) / 100
  return f
}
/*
 * @author: wes
 * @date: 2017-7-28
 * @desc: 时间格式化
*/
function formatTime(date, format) {
  date = new Date(date)
  format = format || 'yyyy-MM-dd hh:mm:ss'
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return format
}

module.exports = {
  del,
  scrollList,
  price,
  formatTime
};
