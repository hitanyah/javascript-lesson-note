// 指定id
const count = document.getElementById('count')

// 變更內容文字
// count.innerText = '999'

// 連著寫
// document.getElementById('count').innerText = '999'

// 加掛事件監聽器
count.addEventListener('click', function () {
  // 字串後加1
  //   count.innerText = count.innerText + 1
  // 轉成數字類型
  count.innerText = +count.innerText + 1
})
