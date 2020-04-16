(() => {
  // เริ่มเขียนโค้ด
  let dragElem; 
  function onDrag() {
    dragElem = this;
  }

  function onDrop() {
    this.appendChild(dragElem);
    dragElem  = null;
  }

  function onDragOver(e) {
    e.preventDefault();
  }
  function onDragEnter(e) {
    e.preventDefault();
  }
  function run() {
    const dragElems = Array.from(document.querySelectorAll(".task"));
    const dropzoneElems = Array.from(document.querySelectorAll(".drop-zone"));

    dragElems.forEach((dragElem) => {
      dragElem.addEventListener("dragstart", onDrag);
    });

    dropzoneElems.forEach((dropzone) => {
      dropzone.addEventListener("drop", onDrop);
      dropzone.addEventListener("dragover", onDragOver);
      dropzone.addEventListener("dragenter", onDragEnter);
    });
  }
  run();
})();
