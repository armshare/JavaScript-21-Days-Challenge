(() => {
  // เริ่มเขียนโค้ด

  const audioElem = document.querySelector("audio");
  const playElem = document.querySelector(".play");
  const progressElem = document.querySelector(".progress-bar");
  const startElem = document.querySelector(".start-time");
  const endElem = document.querySelector(".end-time");

  function onClick() {
    if (audioElem.paused) {
      audioElem.play();
      playElem.className = "pause";
    } else {
      audioElem.pause();
      playElem.className = "play";
    }
  }

  function getDuration(time) {
    const minutes = Math.floor((time / 60) % 60).toString();
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  }
  function onTimeUpdate() {
    startElem.innerHTML = getDuration(audioElem.currentTime);
    progressElem.value = audioElem.currentTime;
  }

  function onLoadedData() {
    endElem.innerHTML = getDuration(audioElem.duration);
    progressElem.max = audioElem.duration;
  }

  function onInput() {
    audioElem.currentTime = progressElem.value;
  }

  function onEnded() {
    playElem.className = "play";
    audioElem.currentTime = 0;
  }

  function run() {
    playElem.addEventListener("click", onClick);

    audioElem.addEventListener("timeupdate", onTimeUpdate);
    audioElem.addEventListener("loadeddata", onLoadedData);
    audioElem.addEventListener("ended", onEnded);

    progressElem.addEventListener("input", onInput);
  }
  run();
})();
