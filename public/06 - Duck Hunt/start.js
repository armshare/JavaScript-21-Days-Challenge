(() => {
  // เริ่มเขียนโค้ด
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function createDuck() {
    return (ducks = [...Array(5)].map((i) => {
      return {
        x: random(0, window.innerWidth),
        y: window.innerHeight,
        speedX: random(-50, 50),
        speedY: random(5, 10),
      };
    }));
  }

  function createDucksElement(duck) {
    const duckEle = document.createElement("div");
    duckEle.className = "duck";
    duckEle.style.left = `${duck.x}px`;
    duckEle.style.top = `${duck.y}px`;
    duckEle.style.backgroundImage = `url(./left-1.png)`;
    document.body.appendChild(duckEle);

    return { duckEle, duck };
  }

  function getDuckBackgroundImage(duck, duckEle) {
    const direction = duck.speedX > 0 ? "right" : "left";
    return duckEle.style.backgroundImage.indexOf("1") !== -1
      ? `url(./${direction}-2.png)`
      : `url(./${direction}-1.png)`;
  }

  function moveDuck(duckEle, duck) {
    const { left, top } = duckEle.getBoundingClientRect();

    const outBoundx = duck.x < 0 || duck.x > window.innerWidth;
    const outBoundy = duck.y < 0 || duck.y > window.innerHeight;

    if (outBoundx) {
      duck.speedX *= -1;
    }
    if (outBoundy) {
      duck.speedY *= -1;
    }

    duck.x = left + duck.speedX;
    duck.y = top - duck.speedY;
    duckEle.style.left = `${duck.x}px`;
    duckEle.style.top = `${duck.y}px`;

    duckEle.style.backgroundImage = getDuckBackgroundImage(duck, duckEle);
  }

  function shootDuck(event){
    const duckEle = event.target;
    duckEle.style.transition  = 'top 2s';
    duckEle.style.top = `${window.innerHeight}px`;

    clearInterval(duckEle.shootInterval);
  
    document.body.removeChild(duckEle)
    setTimeout(()=>{
      const checkDuck =  document.querySelector('.duck');

      if( !checkDuck){
        const winningElement = document.querySelector('.winning');
        winningElement.style.opacity = 1;
      }

    },2000)
  }

  function run() {
    const ducks = createDuck();
    const duckElements = ducks.map(createDucksElement);

    duckElements.forEach(({ duckEle, duck }) => {
       duckEle.shootInterval = setInterval(() => moveDuck(duckEle, duck), 100);
      duckEle.addEventListener('click', shootDuck);
    });
  }
  run();
})();
