(() => {
  // เริ่มเขียนโค้ด

  function onScroll() {
   
    const sectionElems = Array.from(document.querySelectorAll("section"));
    sectionElems.forEach((sectionElem) => {
      const imgElem = sectionElem.querySelector("img");
      const textElem = sectionElem.querySelector(".text");

      const winScroll = window.pageYOffset;
      const imgScroll = imgElem.offsetTop + imgElem.offsetHeight / 10;
      if (winScroll >= imgScroll) {
        textElem.classList.add("reveal");
      }
    });
  }
  function run() {
    document.addEventListener("scroll", onScroll);
  }
  run();
})();
