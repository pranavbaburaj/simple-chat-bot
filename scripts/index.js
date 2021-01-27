import {recognition, Speaker} from "./speech.js"
import {getCurrentTheme, storeTheme} from "./theme.js"

const startSpeaking = document.querySelector(".s")

startSpeaking.addEventListener('click', function(event) {
    recognition.start()
})

export function fillInputBox(inputSelector, fillText){
    const inputBox = document.querySelector(inputSelector)
    inputBox.value = fillText
    localStorage.setItem('last-user-input', fillText)
}

// set the styles
const setAllStyles = (themeData) => {
    // change the background color
    document.body.style.backgroundColor = themeData[0]
}

var currentTheme = getCurrentTheme()

setAllStyles(currentTheme)

