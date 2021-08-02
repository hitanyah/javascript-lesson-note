// input
const inputTodo = document.getElementById('inputTodo')

// button
const btnDel = document.getElementById('btnDel')
const btnAdd = document.getElementById('btnAdd')

// list
const listDefault = document.getElementById('listDefault')
const listWrap = document.getElementById('listWrap')

// data 從 LocalStorage 提取
const data = JSON.parse(localStorage.getItem('todolist')) || []

// 載入畫面後，游標預設在 input
window.onload = function () {
  inputTodo.focus()
  updateList(data)
}

// 空清單預設文字
function clearnList(data) {
  if (data.length > 0) {
    listDefault.innerText = ''
  } else {
    listDefault.innerText = '目前尚無代辦事項'
  }
}

// 列出清單
function updateList(data) {
  let str = ''
  for (let i = 0; i < data.length; i++) {
    str += `<div class="card-body d-flex justify-content-between border-bottom">
    <h5 class="card-title">${data[i].todolist}</h5>
    <button id="btnDel" class="btn btn-secondary" data-num =${i}> X </button>
  </div>`
  }
  listWrap.innerHTML = str
  clearnList(data)
}

// 加入 LocalStorage
function addData(e) {
  e.preventDefault()
  // 用input值設定storage項目的值
  let text = inputTodo.value
  // 設定 data 物件
  let todo = {
    todolist: text,
  }
  // 加進陣列
  if (inputTodo.value == '') {
    alert('請輸入待辦事項')
  } else {
    data.push(todo)
  }
  localStorage.setItem('todolist', JSON.stringify(data))
  updateList(data)
}

// 加入項目
btnAdd.addEventListener('click', addData)
// 按 Enter鍵 加入項目
inputTodo.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    // e.preventDefault()
    addData(e)
  }
})

// 刪除
function delData(e) {
  e.preventDefault()
  // 取得
  let num = e.target.dataset.num
  console.log(num)
  data.splice(num, 1)
  localStorage.setItem('todolist', JSON.stringify(data))
  updateList(data)
}
// 刪除項目
listWrap.addEventListener('click', delData)

// 問題：抓不到動態生成DOM 的id？
// 如何透過索引值刪掉單項storage？
