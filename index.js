const btnHomePlus1 = document.getElementById('btn-home1')
const btnHomePlus2 = document.getElementById('btn-home2')
const btnHomePlus3 = document.getElementById('btn-home3')
const scoreHome = document.getElementById('score-home')
const btnGuestPlus1 = document.getElementById('btn-guest1')
const btnGuestPlus2 = document.getElementById('btn-guest2')
const btnGuestPlus3 = document.getElementById('btn-guest3')
const scoreGuest = document.getElementById('score-guest')
const newGame = document.getElementById('new-game')

let homeScore = 0
let guestScore = 0
scoreHome.innerText = 0
scoreGuest.innerText = 0

btnHomePlus1.addEventListener('click', function(){
    scoreHome.innerHTML = homeScore += 1
})

btnHomePlus2.addEventListener('click', function(){
    scoreHome.innerHTML = homeScore += 2
})

btnHomePlus3.addEventListener('click', function(){
    scoreHome.innerHTML = homeScore += 3
})

btnGuestPlus1.addEventListener('click', function(){
    scoreGuest.innerHTML = guestScore += 1
})

btnGuestPlus2.addEventListener('click', function(){
    scoreGuest.innerHTML = guestScore += 2
})

btnGuestPlus3.addEventListener('click', function(){
    scoreGuest.innerHTML = guestScore += 3
})

newGame.addEventListener('click', function() {
    homeScore = 0
    scoreHome.innerText = 0
    guestScore = 0
    scoreGuest.innerText = 0
})

