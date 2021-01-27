import {recognition, Speaker} from "./speech.js"
import {getCurrentTheme, storeTheme} from "./theme.js"

// the text evaluation that determines what to tell
// back to the user

import createTextEvaluator, {TextEvaluator} from "./text.js"

// the mic button
const startSpeaking = document.querySelector(".s")

// the go button
// for people using the keyborad for typing in
// instead of using the mic
const submitVoiceInput = document.querySelector('.go')


// the main user input box
export const inputTextBox = document.querySelector('.user-input')


// event listeners
// button clicks for computers and touchscreen devices
startSpeaking.addEventListener('click', function(event) {
    TextEvaluator.clearInputBox(inputTextBox)
    recognition.start()
})

startSpeaking.addEventListener('touchstart', function(event) {
    TextEvaluator.clearInputBox(inputTextBox)
    recognition.start()
})

submitVoiceInput.addEventListener('click', function(event) {
    createTextEvaluator(inputTextBox.value)
    TextEvaluator.clearInputBox(inputTextBox)
})

submitVoiceInput.addEventListener('touchstart', function(event) {
    createTextEvaluator(inputTextBox.value)
    TextEvaluator.clearInputBox(inputTextBox)
})

// fill the input box with the
// text passed as the parameter
/**
 * @param {string} inputSelector
 * @param {string} fillText the text to fill
 * 
 * @returns {undefined} returns nothing
 * 
 */
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

