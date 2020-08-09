const btn = document.querySelector('.talk');
const content = document.querySelector('.content')

const greetings = ['Im good what about you', 'very well', 'sorry i couldnt hear', 'could you please repeat', 'leave me alone']

const weather = [ 'weather is fine', 'it is quite hot', 'the sun is shining']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'en-EN'

recognition.onstart = function () {

  console.log('Voice is activated, you can speak now!');
};

recognition.onresult = function (event) {

  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);

};

btn.addEventListener('click', () => {
  recognition.start();
})

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();

  speech.text = 'i do not know what you said';

  if (message.includes('how are you')) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  }

  
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}