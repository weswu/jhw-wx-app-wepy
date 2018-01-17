

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
/*
 * @author: wes
 * @date: 2018-1-17
 * @desc: 滚动加载数据
*/
const scrollList = (ctx, json, text) => {
  if (json.success) {
    addAll(ctx.list, json.attributes.data)
    if (ctx.page === 1) {
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
    ctx.pageSize = ctx.pageSize || 16
    if (json.attributes.data.length < ctx.pageSize) { ctx.more.reachBottom = true } else { ctx.more.reachBottom = false }
  } else {
    ctx.refresh = false
  }
  ctx.more.loading = false
  ctx.$apply()
}

module.exports = {
  del,
  scrollList
};
