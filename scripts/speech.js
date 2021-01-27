import {fillInputBox} from "./index.js"
import createTextEvaluator from "./text.js"

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// the speech recognizer
export const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = false;

recognition.addEventListener('result', (e) => {
    // let last = e.results.length - 1;
    let text = e.results[0][0].transcript;
    // text is the speech
    fillInputBox(".user-input", text)

    //speak out
    // var speaker = new Speaker(text)
    // speaker.speak()
    // console.log(d)
    createTextEvaluator(text)
  });

// Speaker
export class Speaker {
  constructor(textToUtter){
    this.utterText = textToUtter
  }

  speak(){
    const utterance = new SpeechSynthesisUtterance(this.utterText)
    // utterance.volume = 5
    speechSynthesis.speak(utterance)

    return utterance
  }
}

// speaking
// let utterance = new SpeechSynthesisUtterance("Hello world!");
// speechSynthesis.speak(utterance);