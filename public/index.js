// 參考 https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/Objects/JSON
// 取得元素
const squadName = document.querySelector('#squadName')
const homeTown = document.querySelector('#homeTown')
const card = document.querySelector('#card')
// const heroName = document.querySelector('#heroName')
// const age = document.querySelector('#squadName')
// const secretIdentity = document.querySelector('#secretIdentity')
// const powers = document.querySelector('#powers')

// data URL
const requestURL =
  'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'

// 建立GET方法請求，從 XMLHttpRequest 建構子建立新的請求物件實例
const request = new XMLHttpRequest()
request.open('GET', requestURL, true)

// 設定回傳 JSON 物件
request.responseType = 'json'
request.send()

// response
request.onload = function () {
  const data = request.response
  console.log(data)
  showHeader(data)
  showCards(data)
}

// 呈現標題
function showHeader(data) {
  squadName.innerText = data.squadName
  homeTown.innerText = data.homeTown
}

// 呈現卡片
function showCards(data) {
  const heros = data.members
  console.log(heros)
  console.log(heros[0].name)
  console.log(heros.length)

  for (let i = 0; i < heros.length; i++) {
    // let superPowers = heros[i].powers
    // const powerList = document.createElement('ul')
    // for (let j = 0; j < superPowers.length; j++) {
    //   const listItem = document.createElement('li')
    //   listItem.textContent = superPowers[j]
    //   powerList.appendChild(listItem)
    // }
    // console.log(powerList)

    card.innerHTML += `<div class="col-12 col-sm-6 col-md-4">
      <div class="card m-2 p-4">
        <h3 id="heroName" class="text-center mb-4 mt-2">${heros[i].name}</h3>
        <div id="age" class="d-flex">
          <h6>Age:</h6>
          <p>${heros[i].age}</p>
        </div>
        <div id="secretIdentity" class="d-flex">
        <h6>Secret Identity:</h6>
        <p>${heros[i].secretIdentity}</p>
        </div> 
        <div id="powers">
          <h6>Powers:</h6>
            <p>${heros[i].powers}</p>
        </div>
      </div>
  </div>`
  }
}
