(() => {
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new window.SpeechRecognition();

  const btnElem = document.querySelector(".control");

  function record() {
    const isPause = btnElem.classList.contains("record");

    if (isPause) {
      recognition.start();
      btnElem.classList.remove("record");
      btnElem.classList.add("pause");
    } else {
      recognition.stop();

      btnElem.classList.remove("pause");
      btnElem.classList.add("record");
    }
  }

  function onResult(e) {
    const textElem = document.querySelector(".text");
    const { transcript } = e.results[0][0];
    textElem.innerHTML += transcript;
  }

function onEnd(){
  const recording = document.querySelector('.pause');
  if(recording){
    recognition.start();
  }
}

  function run() {
    recognition.lang = "th-TH";

    recognition.addEventListener("result", onResult);
    recognition.addEventListener("end", onEnd);
    btnElem.addEventListener("click", record);
  }

  run();
})();
