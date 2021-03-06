// input
const inputId = document.getElementById('inputId')
const inputPw = document.getElementById('inputPw')
const inputPw2 = document.getElementById('inputPw2')
const inputName = document.getElementById('inputName')
const inputMail = document.getElementById('inputMail')

const inputYear = document.getElementById('inputYear')
const inputMonth = document.getElementById('inputMonth')
const inputDay = document.getElementById('inputDay')

const inputCity = document.getElementById('inputCity')
const inputDist = document.getElementById('inputDist')
const inputZip = document.getElementById('inputZip')
const inputAddress = document.getElementById('inputAddress')

// button
const submitBtn = document.getElementById('submitBtn')

// warning text
const warningId = document.getElementById('warningId')
const warningPw = document.getElementById('warningPw')
const warningPw2 = document.getElementById('warningPw2')
const warningName = document.getElementById('warningName')
const warningMail = document.getElementById('warningMail')
const warningAddress = document.getElementById('warningAddress')

// alert

// TODO 輸入格式規則
const ruleId = new RegExp('^([a-z0-9])$')
const rulePw = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)$')

// ----- 生日下拉選單
// 預設選項值
let selectYear = 0
let selectMonth = 0
let selectDay = 0
// let yearIndex = 0
// let yearOptions = `<option value="0" selected>請選擇</option>`

// 西元年 1960-2021
// for (let i = 1960; i < 2022; i++) {
//   yearOptions += `<option value="${i}">${i}</option>`
// }
// inputYear.innerHTML = yearOptions

// 用一個函式一起跑
function createOption(min, max) {
  let options = `<option value="0" selected>請選擇</option>`

  for (let i = min; i < max + 1; i++) {
    options += `<option value="${i}">${i}</option>`
  }
  return options
}

// 設定年月日區間
inputYear.innerHTML = createOption(1960, 2021)
inputMonth.innerHTML = createOption(1, 12)
inputDay.innerHTML = createOption(1, 31)

inputYear.addEventListener('change', function () {
  selectYear = inputYear.value
  console.log(selectYear)
})
inputMonth.addEventListener('change', function () {
  selectMonth = inputMonth.value
  console.log(selectMonth)
  // 判斷年和月已選
  if (selectYear !== '0' && selectMonth !== '0') {
    // 填入當月日數
    // days = new Date(year,month,0).getDate()
    const maxDays = new Date(+selectYear, +selectMonth, 0).getDate()
    inputDay.innerHTML = createOption(1, maxDays)

    // 解開日選單
    inputDay.disabled = false
  }
})
inputDay.addEventListener('change', function () {
  selectDay = inputDay.value
  console.log(selectDay)
})

// ----- 地址下拉選單
// 預設選項值為 -1
let cityIndex = -1
let distIndex = -1

const defaultOption = `<option value="-1" selected>請選擇</option>`

// 預設呈現
inputCity.innerHTML =
  defaultOption + countries.map((v, i) => `<option value="${i}">${v}</option>`)

inputCity.addEventListener('change', function (e) {
  // 更新選到的索引值，轉為數字類型
  cityIndex = +e.target.value

  // 產生鄉鎮市區下拉項目
  inputDist.innerHTML =
    defaultOption +
    townships[cityIndex].map((v, i) => `<option value="${i}">${v}</option>`)
})

inputDist.addEventListener('change', function (e) {
  // 更新選到的索引值，轉為數字類型
  distIndex = +e.target.value
  // 呈現郵遞區號
  inputZip.value = postcodes[cityIndex][distIndex]
})

// 按下註冊按鈕，進行驗證
submitBtn.addEventListener('click', function (e) {
  // 停止表單按鈕預設動作
  e.preventDefault()

  // 錯誤訊息初始化
  warningId.innerText = ''
  warningPw.innerText = ''
  warningPw2.innerText = ''
  warningName.innerText = ''
  warningMail.innerText = ''
  warningAddress.innerText = ''

  // 空白驗證
  // .trim() 移除空白字元
  if (!inputId.value.trim()) {
    warningId.innerText += '帳號請勿空白. '
  }
  if (!inputPw.value.trim()) {
    warningPw.innerText += '密碼請勿空白. '
  }
  if (!inputPw2.value.trim()) {
    warningPw2.innerText += '密碼驗證請勿空白. '
  }
  if (!inputName.value.trim()) {
    warningName.innerText += '名稱請勿空白. '
  }
  if (!inputMail.value.trim()) {
    warningMail.innerText += '信箱請勿空白. '
  }
  if (!inputAddress.value.trim()) {
    warningAddress.innerText += '地址請勿空白. '
  }

  // 帳號內容驗證
  // 須為6位數以上
  if (inputId.value.length < 6) {
    warningId.innerText += '帳號至少需6碼. '
  }
  // TODO 須為英數字組合
  // if (!ruleId.test(inputId.value)) {
  //   warningPw.innerText += '密碼須為英數字組合. '
  // }

  // 密碼內容驗證
  // 須為8位數以上
  if (inputPw.value.length < 8) {
    warningPw.innerText += '密碼至少需8碼. '
  }
  // TODO 須為英數字組合，含一個大寫英文字
  // if (!rulePw.test(inputPw.value)) {
  //   warningPw.innerText += '密碼須為英數字組合、至少一個大寫英文字. '
  // }

  // 密碼再確認
  if (inputPw.value !== inputPw2.value) {
    warningPw2.innerText += '密碼驗證失敗. '
  }

  // 電子信箱驗證
  // @ 不可以是郵件地址的首字符
  // @ 之後至少有一個點號
  const atpos = inputMail.value.indexOf('@')
  const dotpos = inputMail.value.lastIndexOf('.')
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= inputMail.value.length) {
    warningMail.innerText += '請正確輸入. '
  }
})

// 格式不符，產生提示訊息

// 格式通過，出現重複確認視窗

// 送出成功
