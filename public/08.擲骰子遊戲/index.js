// button
const playBtn = document.getElementById('playBtn')

// dice
const playerDice = document.getElementById('playerDice')
const npcDice = document.getElementById('npcDice')

// result text
const resultText = document.getElementById('resultText')

function playgame() {
  // 產生 1-6 隨機數
  const playerNum = Math.floor(Math.random() * 6) + 1
  const npcNum = Math.floor(Math.random() * 6) + 1

  // 連到 font-awesome 對應名稱
  let playerPoint = ''

  switch (playerNum) {
    case 1:
      playerPoint = 'one'
      break
    case 2:
      playerPoint = 'two'
      break
    case 3:
      playerPoint = 'three'
      break
    case 4:
      playerPoint = 'four'
      break
    case 5:
      playerPoint = 'five'
      break
    case 6:
      playerPoint = 'six'
      break
    default:
      playerPoint = 'six'
      break
  }

  let npcPoint = ''

  switch (npcNum) {
    case 1:
      npcPoint = 'one'
      break
    case 2:
      npcPoint = 'two'
      break
    case 3:
      npcPoint = 'three'
      break
    case 4:
      npcPoint = 'four'
      break
    case 5:
      npcPoint = 'five'
      break
    case 6:
      npcPoint = 'six'
      break
    default:
      npcPoint = 'six'
      break
  }

  // 呈現圖示
  playerDice.innerHTML = `<i class="fas fa-dice-${playerPoint}"></i>`
  npcDice.innerHTML = `<i class="fas fa-dice-${npcPoint}"></i>`

  // 比較勝負
  // 呈現結果
  if (playerNum > npcNum) {
    resultText.innerHTML =
      '<h4 class="playerWin">玩家勝 <i class="far fa-smile-wink"></i></h4>'
  } else if (playerNum < npcNum) {
    resultText.innerHTML =
      '<h4 class="npcWin">電腦勝 <i class="fas fa-sad-tear"></i></h4>'
  } else {
    resultText.innerHTML = '<h4 class="result">平手</h4>'
  }
}

playBtn.addEventListener('click', playgame)
