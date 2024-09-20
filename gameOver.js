const start = document.getElementById('startGameBtn')
const feed = document.getElementById('feed')
const sleep = document.getElementById('sleep')
const drink = document.getElementById('drink')
const howl = document.getElementById('howl')
const hunt = document.getElementById('hunt')
const fish = document.getElementById('fish')
const hunger = document.getElementById('hunger')
const health = document.getElementById('health')
const thirst = document.getElementById('thirst')
const tiredness = document.getElementById('tiredness')
const polarBear = document.getElementById('polarBearBtn')
const snowLeopard = document.getElementById('snowLeopardBtn')
const wolf = document.getElementById('wolfBtn')
const reset = document.getElementById('reset')
const statBars = document.getElementById('statBars')
const polarBearImg = document.getElementById('polarBearImg')
const wolfImg = document.getElementById('wolfImg')
const snowLeopardImg = document.getElementById('snowLeopardImg')
const subheading = document.getElementById('subheading')

const hideAllActions = () => {
    hunt.style.display = 'none'
    howl.style.display = 'none'
    fish.style.display = 'none'
    start.style.display = 'none'
    feed.style.display = 'none'
    drink.style.display = 'none'
    sleep.style.display = 'none'
    reset.style.display = 'none'
    wolf.style.display = 'none'
    polarBear.style.display = 'none'
    snowLeopard.style.display = 'none'
}

const hideAllStats = () => {
    statBars.style.display = 'none'
}

const hideAllImages = () => {
    polarBearImg.style.display = 'none'
    wolfImg.style.display = 'none'
    snowLeopardImg.style.display = 'none'
}

polarBear.addEventListener('click', ()=>{
    hideAllActions()
    hideAllImages()
    fish.style.display = 'block'
    feed.style.display = 'block'
    drink.style.display = 'block'
    sleep.style.display = 'block'
    start.style.display = 'block'
    polarBearImg.style.display = 'block'
    statBars.style.display = 'block'
})

snowLeopard.addEventListener('click', ()=>{
    hideAllActions()
    hunt.style.display = 'block'
    feed.style.display = 'block'
    drink.style.display = 'block'
    sleep.style.display = 'block'
    start.style.display = 'block'
    snowLeopardImg.style.display ='block'
    statBars.style.display = 'block'
})

wolf.addEventListener('click', ()=>{
    hideAllActions()
    hideAllImages()
    howl.style.display = 'block'
    feed.style.display = 'block'
    drink.style.display = 'block'
    sleep.style.display = 'block'
    start.style.display = 'block'
    wolfImg.style.display = 'block'
    statBars.style.display = 'block'
})

let healthvalue = 100
let hungervalue = 10
let thirstvalue = 100
let tirednessvalue = 100

const resetGame = () => {
    healthvalue = 10
    hungervalue = 100
    thirstvalue = 100
    tirednessvalue = 100
    hideAllActions()
    hideAllImages()
    hideAllStats()
    polarBear.style.display = 'block'
    snowLeopard.style.display = 'block'
    wolf.style.display = 'block'
}
const checkGameOver = () => {
    if (healthvalue == 0 || hungervalue == 0 || thirstvalue == 0 || tirednessvalue == 0) {
        clearInterval(statInterval)
        alert(`Game Over!!! Your pet has died!!! Press Reset Game to return to main menu!`)
        hideAllActions()
        reset.style.display = 'block'
}}

reset.addEventListener('click', () => {
    resetGame()
})

start.addEventListener("click", () => {  
    statInterval = setInterval(() => {
        healthvalue = Math.max(healthvalue -1, 0)
        hungervalue = Math.max(hungervalue -1, 0)
        thirstvalue = Math.max(thirstvalue -1, 0)
        tirednessvalue = Math.max(tirednessvalue -1, 0)
        //  decreasing and updating progress bars
        health.value = healthvalue;
        hunger.value = hungervalue;
        thirst.value = thirstvalue;
        tiredness.value = tirednessvalue;
        console.log(healthvalue)
        checkGameOver()
    }, 500)
    start.style.display = 'none'
})

window.onload = () => {
    resetGame()
}