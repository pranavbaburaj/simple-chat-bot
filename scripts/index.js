import {recognition} from "./speech.js"

const startSpeaking = document.querySelector(".s")

startSpeaking.addEventListener('click', function(event) {
    recognition.start()
})


