let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonIncreaseTime = document.querySelector('.increase-time')
const buttonDecreaseTime = document.querySelector('.decrease-time')
const buttonFlorestOn = document.querySelector('.florest-on')
const buttonFlorestOff = document.querySelector('.florest-off')
const buttonRainOn = document.querySelector('.rain-on')
const buttonRainOff = document.querySelector('.rain-off')
const buttonCoffeeOn = document.querySelector('.coffee-shop-on')
const buttonCoffeeOff = document.querySelector('.coffee-shop-off')
const buttonFireplaceOn = document.querySelector('.fireplace-on')
const buttonFireplaceOff = document.querySelector('.fireplace-off')
let timerTimeOut
let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)
const defaultMinutes = 5

const florestSound = new Audio('./music/Floresta.wav')
const rainSound = new Audio('./music/Chuva.wav')
const coffeeShopSound = new Audio('./music/Cafeteria.wav')
const fireplaceSound = new Audio('./music/Lareira.wav')

function updateTimer(updateMinutes, updateSeconds) {
  minutes = updateMinutes
  seconds = updateSeconds
}

function changeMinutesToDisplay(minutesToShow, addMinutes) {
  let minutesToMinutes = minutesToShow + addMinutes
  updateDisplay(minutesToMinutes, seconds)
  updateTimer(minutesToMinutes, seconds)
}

function updateDisplay(newMinutes, newSeconds) {
  minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
  secondsDisplay.textContent = String(newSeconds).padStart(2, '0')
}

function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (minutes <= 0 && seconds <= 0) {
      updateDisplay(0, 0)
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

function reset() {
  clearTimeout(timerTimeOut)
  updateDisplay(minutes, seconds)
}

buttonPlay.addEventListener('click', function () {
  countdown()
})

buttonStop.addEventListener('click', function () {
  reset()
})

buttonIncreaseTime.addEventListener('click', function () {
  changeMinutesToDisplay(minutes, defaultMinutes)
})

buttonDecreaseTime.addEventListener('click', function () {
  changeMinutesToDisplay(minutes, -defaultMinutes)
})

buttonFlorestOff.addEventListener('click', function () {
  buttonFlorestOff.classList.add('hide')
  buttonFlorestOn.classList.remove('hide')
  buttonRainOff.classList.remove('hide')
  buttonRainOn.classList.add('hide')
  buttonCoffeeOff.classList.remove('hide')
  buttonCoffeeOn.classList.add('hide')
  buttonFireplaceOff.classList.remove('hide')
  buttonFireplaceOn.classList.add('hide')
  florestSound.play()
  fireplaceSound.pause()
  coffeeShopSound.pause()
  rainSound.pause()
})

buttonRainOff.addEventListener('click', function () {
  buttonFlorestOff.classList.remove('hide')
  buttonFlorestOn.classList.add('hide')
  buttonRainOff.classList.add('hide')
  buttonRainOn.classList.remove('hide')
  buttonCoffeeOff.classList.remove('hide')
  buttonCoffeeOn.classList.add('hide')
  buttonFireplaceOff.classList.remove('hide')
  buttonFireplaceOn.classList.add('hide')
  florestSound.pause()
  fireplaceSound.pause()
  coffeeShopSound.pause()
  rainSound.play()
})

buttonCoffeeOff.addEventListener('click', function () {
  buttonFlorestOff.classList.remove('hide')
  buttonFlorestOn.classList.add('hide')
  buttonRainOff.classList.remove('hide')
  buttonRainOn.classList.add('hide')
  buttonCoffeeOff.classList.add('hide')
  buttonCoffeeOn.classList.remove('hide')
  buttonFireplaceOff.classList.remove('hide')
  buttonFireplaceOn.classList.add('hide')
  florestSound.pause()
  fireplaceSound.pause()
  coffeeShopSound.play()
  rainSound.pause()
})

buttonFireplaceOff.addEventListener('click', function () {
  buttonFlorestOff.classList.remove('hide')
  buttonFlorestOn.classList.add('hide')
  buttonRainOff.classList.remove('hide')
  buttonRainOn.classList.add('hide')
  buttonCoffeeOff.classList.remove('hide')
  buttonCoffeeOn.classList.add('hide')
  buttonFireplaceOff.classList.add('hide')
  buttonFireplaceOn.classList.remove('hide')
  florestSound.pause()
  fireplaceSound.play()
  coffeeShopSound.pause()
  rainSound.pause()
})
