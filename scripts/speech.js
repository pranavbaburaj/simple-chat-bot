const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// the speech recognizer
export const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = false;

recognition.addEventListener('result', (e) => {
    // let last = e.results.length - 1;
    let text = e.results[0][0].transcript;
    // text is the speech
  });

// speaking
// let utterance = new SpeechSynthesisUtterance("Hello world!");
// speechSynthesis.speak(utterance);