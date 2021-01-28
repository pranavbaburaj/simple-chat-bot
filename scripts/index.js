import {recognition, Speaker} from "./speech.js"
import {getCurrentTheme, storeTheme} from "./theme.js"
import {setUserName} from "./message.js"


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

// const fillLastUserInput = (inputBox) => {
//     const lastUserInput = localStorage.getItem('last-user-input')
//     console.log(`data = ${lastUserInput}`)
// }

// fillLastUserInput(inputTextBox)

// messages
export const messageList = document.querySelector('.messages')

// add a new bot message
export function addBotMessage(messageToAdd, listItem){
    // create a list elemeny
    var listItemNode = document.createElement('li')
    var listTextNode = document.createTextNode(messageToAdd.toString())
    listItemNode.appendChild(listTextNode)
    listItem.appendChild(listItemNode)
}


// the enter key event
// listener for user text input
// box
inputTextBox.addEventListener('keydown', function(event) {
    if(event.keyCode == 13){
        createTextEvaluator(inputTextBox.value)
        TextEvaluator.clearInputBox(inputTextBox)
    }
})

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
    localStorage.setItem('last-user-input',"")
}

// set the styles
const setAllStyles = (themeData) => {
    // change the background color
    document.body.style.backgroundColor = themeData[0]
}

var currentTheme = getCurrentTheme()

const wishUser = (userName) => {
    const wishString = `Hello, ${userName}`
    createTextEvaluator(wishString)
    TextEvaluator.clearInputBox(inputTextBox)
}

wishUser(setUserName())
// console.log(localStorage.getItem('user'))
setAllStyles(currentTheme)

