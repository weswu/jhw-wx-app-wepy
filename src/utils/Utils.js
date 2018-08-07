import Tips from '@/utils/Tips'

/*
 * @author: wes
 * @date: 2018-1-17
 * @desc: 删除单个数组
*/
const del = (ctx, id, text) => {
  ctx.list.forEach((item, index) => {
    if (item.id === id) {
      ctx.list.splice(index, 1)
    }
  })
  ctx.count = ctx.count - 1
  text && wx.setNavigationBarTitle({
    title: text + '(' + ctx.count + ')'
  })
  Tips.success('删除成功')
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
/*
 * @author: wes
 * @date: 2018-1-17
 * @desc: 滚动加载数据
*/
const scrollList = (ctx, res, text) => {
  if (res.success) {
    addAll(ctx.list, res.attributes.data)
    ctx.params.pageSize = ctx.params.pageSize || 16
    let isOnePage = false //
    if(ctx.params.page === 1){
      isOnePage = true
    }
    if (isOnePage) {
      ctx.count = res.attributes.count
      if (res.attributes.data.length === 0) {
        ctx.more.empty = true
      } else {
        ctx.more.empty = false
      }
      text && wx.setNavigationBarTitle({
        title: text + '(' + ctx.count + ')'
      })
    }
    let pageSize = ctx.params.pageSize
    if (res.attributes.data.length < pageSize) { ctx.more.reachBottom = true } else { ctx.more.reachBottom = false }
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
function formatTime(date, format, week) {
  if (!date) return ''
  date = new Date(date)
  format = format || 'yyyy-MM-dd hh:mm'
  var weekday = new Date(new Date() - 1000 * 60 * 60 * 24 * 6)
  if (week && date.getFullYear() === new Date().getFullYear() && date > weekday) {
    var show_day = new Array('星期一','星期二','星期三','星期四','星期五','星期六','星期日')
    format = show_day[date.getDay() - 1]
    var yesterday = new Date(new Date() - 1000 * 60 * 60 * 24)
    if (date > yesterday) {
      format = (Array(2).join(0) + date.getHours()).slice(-2) + ':' + (Array(2).join(0) + date.getMinutes()).slice(-2)
    }
  } else {
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
  }
  return format
}

module.exports = {
  del,
  scrollList,
  price,
  formatTime
};
