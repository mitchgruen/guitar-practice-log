let count = 0

function addPracticeSession() {
    minutesEl = document.getElementById("minutes-el").value + ", "
    console.log(minutesEl)
    sessionEl = document.getElementById("session-el")
    console.log(sessionEl.textContent)
    sessionEl.textContent += minutesEl
    console.log(sessionEl.textContent)
    document.getElementById("minutes-el").value = ""
    
}
