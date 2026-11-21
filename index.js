let homeScore = 0
let guestScore = 0

let gNb = document.getElementById("g-nb")
let hNb = document.getElementById("h-nb")

function oneH() {
    homeScore += 1
    hNb.textContent = homeScore
}

function twoH() {
    homeScore += 2
    hNb.textContent = homeScore
}

function threeH() {
    homeScore += 3
    hNb.textContent = homeScore
}





function oneG() {
    guestScore += 1
    gNb.textContent = guestScore
}

function twoG() {
    guestScore += 2
    gNb.textContent = guestScore
}

function threeG() {
    guestScore += 3
    gNb.textContent = guestScore
}

function reset() {
    guestScore = 0
    homeScore = 0
    gNb.textContent = guestScore
    hNb.textContent = homeScore
}
