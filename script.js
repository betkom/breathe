const container = document.querySelector('.container')
const text = document.querySelector('#text')
const beep = new Audio('https://freesound.org/data/previews/259/259703_4486188-lq.mp3')
beep.volume = 0.3
const breatheIn = new Audio('https://freesound.org/data/previews/352/352750_3110783-lq.mp3');
const breathOut = new Audio('https://freesound.org/data/previews/333/333577_5889445-lq.mp3')

const totalTime = 10000
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

const count = 0

function countBreathe() {
    count += 1
  return count
}

breathe()

function breathe() {
  beep.play();
  text.innerHTML = 'Breathe in! (' + breatheTime/1000 + 's)'
  container.className = 'container grow'
  setTimeout(() => {
    beep.play();
    text.innerHTML = 'Hold! (' + holdTime/1000 + 's)'
    setTimeout(() => {
      beep.play();
      text.innerHTML = 'Breathe out!(' + breatheTime/1000 + 's)'
      container.className = 'container shrink'
    }, holdTime)
  },breatheTime)
}

setInterval(breathe, totalTime)