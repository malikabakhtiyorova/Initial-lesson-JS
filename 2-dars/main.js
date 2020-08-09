const rec = new webkitSpeechRecognition()

rec.lang = 'uz-UZ'
  
rec.onend = function () {

  console.log('Aloqa tugadi.')
}

rec.onresult = function (event) {

  const buyruq = event.results[0][0].transcript.toLowerCase()

  if (buyruq === 'qizil') {

    document.body.style.backgroundColor = 'red'
  }
  else if (buyruq === 'yashil') {
    document.style.backgroundColor = 'green'
  }
  else if (buyruq === 'muhammad') {
    console.log('Salom', buyruq)
  }
  else {
    console.log('Tushunmadim(')
  }
}

rec.onerror = function () {

  console.log('Xatolik yuz berdi')
}

window.onkeyup = function (event) {

  if (event.keyCode === 32) {
    rec.start()
  }

}







