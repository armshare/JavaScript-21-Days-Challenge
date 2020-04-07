(() => {
  // เริ่มเขียนโค้ด
  function run() {
    const bodyEle = document.querySelector("body");
    const eyeElement = document.querySelectorAll(".eye");

    function mousemove({ pageX, pageY }) {
      eyeElement.forEach((i) => {
        const { left, top } = i.getBoundingClientRect();
        const eyeElementX = left + i.offsetWidth /2;
        const eyeElementY = top + i.offsetHeight /2;
        const radian = Math.atan2( pageX  - eyeElementX , pageY - eyeElementY);
        const angle = radian * 180 / Math.PI * -1;

        i.style.transform = `rotate(${angle}deg)`;
      });
    }
    bodyEle.addEventListener("mousemove", mousemove);
  }

  run();
})();
