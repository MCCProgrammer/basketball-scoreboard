let homeScore = document.getElementById("home-Score")
let guestScore = document.getElementById("guest-Score")
let varHomeScore = 0
let varGuestScore = 0
let titleHome = document.getElementById("title-home")
let titleGuest = document.getElementById("title-guest")
let previousGame = document.getElementById("previousGames")

// Load scores and previous games from local storage
window.onload = function () {
    const savedHomeScore = localStorage.getItem("homeScore")
    const savedGuestScore = localStorage.getItem("guestScore")
    const savedPreviousGames = localStorage.getItem("previousGames")

    if (savedHomeScore !== null) {
        varHomeScore = parseInt(savedHomeScore)
        homeScore.textContent = varHomeScore
    }

    if (savedGuestScore !== null) {
        varGuestScore = parseInt(savedGuestScore)
        guestScore.textContent = varGuestScore
    }

    if (savedPreviousGames !== null) {
        previousGame.textContent = savedPreviousGames
    }

    whoIsWinning()
}

function addHomeScore1() {
    varHomeScore += 1
    updateScores()
}

function addHomeScore2() {
    varHomeScore += 2
    updateScores()
}

function addHomeScore3() {
    varHomeScore += 3
    updateScores()
}

function addGuestScore1() {
    varGuestScore += 1
    updateScores()
}

function addGuestScore2() {
    varGuestScore += 2
    updateScores()
}

function addGuestScore3() {
    varGuestScore += 3
    updateScores()
}

function updateScores() {
    homeScore.textContent = varHomeScore
    guestScore.textContent = varGuestScore
    localStorage.setItem("homeScore", varHomeScore)
    localStorage.setItem("guestScore", varGuestScore)
    whoIsWinning()
}

function whoIsWinning() {
    resetTitle()
    if (varHomeScore > varGuestScore) {
        titleHome.style.color = "green"
        titleHome.style.textShadow = "0px 0px 5px green"
        titleGuest.style.color = "#d62828"

    } else if (varHomeScore < varGuestScore) {
        titleGuest.style.color = "green"
        titleGuest.style.textShadow = "0px 0px 4px green"
        titleHome.style.color = "#d62828"
    } else {
        resetTitle()
    }
}

function deleteHistory() {
    previousGame.textContent = "Previous Games: "
    localStorage.removeItem("previousGames")
}

function resetTitle() {
    titleHome.style.color = "white"
    titleHome.style.textShadow = "none"
    titleGuest.style.color = "white"
    titleGuest.style.textShadow = "none"
}

function newGame() {
    previousGame.textContent += "Home " + varHomeScore + " - " + varGuestScore + " Guest" + " ||"
    localStorage.setItem("previousGames", previousGame.textContent)

    varGuestScore = 0
    varHomeScore = 0
    resetTitle()
    homeScore.textContent = 0
    guestScore.textContent = 0
    localStorage.setItem("homeScore", varHomeScore)
    localStorage.setItem("guestScore", varGuestScore)
}