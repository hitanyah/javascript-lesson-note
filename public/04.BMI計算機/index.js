// input
const bodyHeight = document.getElementById('bodyHeight')
const bodyWeight = document.getElementById('bodyWeight')
// button
const calculate = document.getElementById('calculate')
// result
const bmiText = document.getElementById('bmiText')

// BMI值計算公式: BMI = 體重(公斤) / 身高(公尺)平方

// 加掛事件監聽器
calculate.addEventListener('click', function (e) {
  // 停止表單按鈕預設動作
  e.preventDefault()

  // 表單未填寫警示
  if ((bodyHeight.value == '') | (bodyWeight.value == '')) {
    alert('請輸入完整資料')
  }

  // 計算平方 Math.pow(基數,指數)
  // + 轉成數字
  // .toFixed() 取小數點位數
  const height2meter = +bodyHeight.value / 100
  const result = (+bodyWeight.value / Math.pow(height2meter, 2)).toFixed(1)
  bmiText.innerText = '您的BMI值為：' + result
})
