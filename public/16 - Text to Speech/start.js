(() => {
  const message = new SpeechSynthesisUtterance();

  function onVoiceChanged() {
    const voices = speechSynthesis.getVoices();
    const thVoice = voices.find((i) => i.lang === "th-TH");
    message.voice = thVoice;
  }

  function onClick(e) {
    message.text = e.target.getAttribute("alt");
    console.log(message.text);
    console.log(message);
    speechSynthesis.speak(message);
  }
  function run() {
    speechSynthesis.addEventListener("voiceschanged", onVoiceChanged);

    const imageElems = Array.from(document.querySelectorAll("img"));
    imageElems.forEach((imageElem) =>
      imageElem.addEventListener("click", onClick)
    );
  }
  run();
})();
