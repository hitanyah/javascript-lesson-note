// 指定id
const count = document.getElementById('count')

const add = document.getElementById('add')
const sub = document.getElementById('sub')

// 加掛事件監聽器
add.addEventListener('click', function () {
  // 轉成數字類型
  count.innerText = +count.innerText + 1
})
sub.addEventListener('click', function () {
  // 轉成數字類型
  count.innerText = +count.innerText - 1
})
