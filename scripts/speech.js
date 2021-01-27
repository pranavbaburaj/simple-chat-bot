const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = false;

recognition.addEventListener('result', (e) => {
    // let last = e.results.length - 1;
    let text = e.results[0][0].transcript;
  
    console.log('Confidence: ' + text);
  
    // We will use the Socket.IO here later…
  });

// speaking
// let utterance = new SpeechSynthesisUtterance("Hello world!");
// speechSynthesis.speak(utterance);