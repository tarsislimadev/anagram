
const elHistory = document.getElementById('history')
const elLetters = document.getElementById('letters')

const words = ['nana', 'nene', 'nini', 'nono', 'nunu']
const current = []
const past = []
let mouseY = null

const saveHistory = () => past.push(current)

const showHistory = () => {
  elHistory.innerHTML = ''
  past.forEach(letters => {
    const tr = document.createElement('tr')

    const td = document.createElement('td')
    td.innerText = letters.join('')

    tr.appendChild(td)
    elHistory.appendChild(tr)
  })
}

const getWord = () => words[Math.floor(Math.random() * words.length)]

const clearCurrent = () => { while (current[0]) current.shift() }

const setCurrent = (letters) => letters.forEach(letter => current.push(letter))

const getLetters = () => getWord().split('')

const onTouch = ({ type, target, changedTouches: [ { pageY: y } ] }) => {
  if (type === 'touchstart') {
    mouseY = y
  } else {
    const charCode = target.innerText.charCodeAt() + (mouseY - y > 0 ? -1 : 1)
    if (charCode > 122 || charCode < 97) return
    target.innerText = String.fromCharCode(charCode)
  }
}

const showLetters = () => {
  elLetters.innerHTML = ''

  const tr = document.createElement('tr')

  current.forEach(letter => {
    const td = document.createElement('td')
    td.innerText = letter
    td.addEventListener('touchstart', onTouch)
    td.addEventListener('touchend', onTouch)
    tr.appendChild(td)
  })

  elLetters.appendChild(tr)
}

const start = () => {
  saveHistory()
  showHistory()
  clearCurrent()
  setCurrent(getLetters())
  showLetters()
}

document.addEventListener('DOMContentLoaded', () => start())
