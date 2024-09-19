const healthValue = document.getElementById('')
const hungerValue = document.getElementById('')
const thirstValue = document.getElementById('')
const tirednessValue = document.getElementById('')

const resetGame = () => {
    document.getElementById('').style.display = 'block'
    document.getElementById('').style.display = 'none'
    currentBeast = null
}

const checkGameOver = () => {
    if (healthValue == 0 || hungerValue == 0 || thirstValue == 0 || tirednessValue == 0) {
        clearInterval(statInterval)
        alert(`Game Over!!! Your pet has died!!! Press below to return to main menu!`)
        resetGame()
    }
}