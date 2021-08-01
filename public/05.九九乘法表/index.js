// block p
const p1 = document.getElementById('block1')
const p2 = document.getElementById('block2')
const p3 = document.getElementById('block3')
const p4 = document.getElementById('block4')
const p5 = document.getElementById('block5')
const p6 = document.getElementById('block6')
const p7 = document.getElementById('block7')
const p8 = document.getElementById('block8')
const p9 = document.getElementById('block9')

for (let j = 1; j <= 9; j++) {
  p1.innerHTML += '<p>' + '1' + ' X ' + j + ' = ' + 1 * j + '</p>'
  p2.innerHTML += '<p>' + '2' + ' X ' + j + ' = ' + 2 * j + '</p>'
  p3.innerHTML += '<p>' + '3' + ' X ' + j + ' = ' + 3 * j + '</p>'
  p4.innerHTML += '<p>' + '4' + ' X ' + j + ' = ' + 4 * j + '</p>'
  p5.innerHTML += '<p>' + '5' + ' X ' + j + ' = ' + 5 * j + '</p>'
  p6.innerHTML += '<p>' + '6' + ' X ' + j + ' = ' + 6 * j + '</p>'
  p7.innerHTML += '<p>' + '7' + ' X ' + j + ' = ' + 7 * j + '</p>'
  p8.innerHTML += '<p>' + '8' + ' X ' + j + ' = ' + 8 * j + '</p>'
  p9.innerHTML += '<p>' + '9' + ' X ' + j + ' = ' + 9 * j + '</p>'
}
