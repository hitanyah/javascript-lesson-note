const money = document.getElementById('money')
const moneyEx = document.getElementById('moneyEx')

const usd2twd = document.getElementById('usd2twd')
const twd2usd = document.getElementById('twd2usd')

// 1 USD = 28.53 TWD

// 加掛事件監聽器
usd2twd.addEventListener('click', function () {
  // + 轉成數字
  const result = +money.value * 28.53
  moneyEx.innerText = '美金＞台幣：' + result
})
twd2usd.addEventListener('click', function () {
  // Number 轉成數字
  // .toFixed(小數點後位數)
  const result = (Number(money.value) / 28.53).toFixed(2)
  moneyEx.innerText = '台幣＞美金：' + result
})
