// 取得元素
const cycle = document.getElementById('cycle')
const last = document.getElementById('date-last')
const next = document.getElementById('date-result')
const countdown = document.getElementById('countdown')

const btnStart = document.getElementById('btn-start')
const btnNote = document.getElementById('btn-note')

const now = new Date()

// 計算下個日期 last date + cycle days
btnStart.addEventListener('click', function () {
  if (last.value && cycle.value) {
    let cycleDays = Number(cycle.value)
    let lastDate = new Date(last.value)
    // 1. 計算下一次日期
    let result = addDays(lastDate, cycleDays)
    // 格式化日期
    let resultYear = result.getFullYear()
    let resultMonth = result.getMonth() + 1
    let resultDay = result.getDate()
    // 顯示在畫面
    next.innerText = `${resultYear} 年 ${resultMonth} 月 ${resultDay} 日`
    // 2. 計算還有幾天
    let countNum = countDays(result, now)
    // 顯示在畫面
    countdown.innerText = `還有 ${countNum} 天`
  }
})

// 計算下一次日期：上次日期 + 週期
function addDays(date, cycle) {
  let newDate = date.getDate() + cycle
  let r = new Date(date.setDate(newDate))
  return r
}

// 計算還有幾天：下一次日期 - 現在日期
function countDays(nextDate, nowDate) {
  const oneDay = 24 * 60 * 60 * 1000
  let r = Math.floor(Math.abs(nextDate - nowDate) / oneDay)
  return r
}

// TODO 記錄行事曆 Google Calendar API
