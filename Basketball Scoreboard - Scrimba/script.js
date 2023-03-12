let addHomeOne = document.getElementById('addOneHome')
let addHomeTwo = document.getElementById('addTwoHome')
let addHomeThree = document.getElementById('addThreeHome')
let displayHome = document.getElementById('display--home')
let displayGuest = document.getElementById('display--guest')
let newGameBtn = document.getElementById('newGameButton')
let homeScore = 0
let guestScore = 0

function increaseHomeOne() {
	homeScore += 1
	displayHome.textContent = homeScore
}

function increaseHomeTwo() {
	homeScore += 2
	displayHome.textContent = homeScore
}

function increaseHomeThree() {
	homeScore += 3
	displayHome.textContent = homeScore
}

function increaseGuestOne() {
	guestScore += 1
	displayGuest.textContent = guestScore
}

function increaseGuestTwo() {
	guestScore += 2
	displayGuest.textContent = guestScore
}

function increaseGuestThree() {
	guestScore += 3
	displayGuest.textContent = guestScore
}

function startNewGame() {
	displayGuest.textContent = 0
	displayHome.textContent = 0
	guestScore = 0
	homeScore = 0
}

// function showLeader() {
// 	if (guestScore > homeScore) {
// 		displayGuest.style.color = "5px solid blue";
// 		// displayGuest.classList.toggle('active')
// 	} else if (homeScore > guestScore) {
// 		displayHome.style.border = '5px solid red'
// 	} else {
// 		displayHome.style.border = 'none'
// 		displayGuest.style.border = 'none'
// 	}
// }
// function leader () {
// if ( guestScore > homeScore) {
//     return displayGuest.classList.toggle('#active')
// } else if ( homeScore > guestScore) {
//     return displayHome.classList.toggle('#active');
// }
// }
