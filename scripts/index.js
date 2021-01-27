import {recognition} from "./speech.js"
import {getCurrentTheme, storeTheme} from "./theme.js"

const startSpeaking = document.querySelector(".s")

startSpeaking.addEventListener('click', function(event) {
    recognition.start()
})

// set the styles
const setAllStyles = (themeData) => {
    // change the background color
    document.body.style.backgroundColor = themeData[0]
}

var currentTheme = getCurrentTheme()

setAllStyles(currentTheme)

