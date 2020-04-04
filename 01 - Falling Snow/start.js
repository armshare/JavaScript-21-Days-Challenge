(() => {
  //create canvas size == size window
  function createCanvasArea() {
    const canvas = document.getElementById("falling-snow-canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    return {
      canvas,
      canvasContext: canvas.getContext("2d"),
      numberOfSnowballs: 250,
    };
  }

  // utility fn eg. random()
  function random(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
  }
  //create snowball
  function createSnowballs(canvas, numberOfSnowballs) {
    return [...Array(numberOfSnowballs)].map((i) => {
      return {
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        radius: random(1, 4),
        opacity: random(0.5, 1),
        speedX: random(-5, 5),
        speedY: random(1, 3),
      };
    });
  }

  //draw snowball
  function drawSnowball(canvasContext, snowball) {
    canvasContext.beginPath();
    canvasContext.arc(snowball.x, snowball.y, snowball.radius, 0, 2 * Math.PI);
    canvasContext.fillStyle = `rgba(255,255,255,${snowball.opacity})`;
    canvasContext.fill();
  }

  // move snowball
  function moveSnowBall(snowball, canvas) {
    snowball.x += snowball.speedX;
    snowball.y += snowball.speedY;

    if (snowball.x > canvas.width) {
      snowball.x = 0;
    } else if (snowball.x < 0) {
      snowball.x = canvas.width;
    }

    if( snowball.y > canvas.height){
      snowball.y = 0;
    }
  }

  function run() {
    const { canvas, canvasContext, numberOfSnowballs } = createCanvasArea();
    const snowballs = createSnowballs(canvas, numberOfSnowballs);

    setInterval(() => {
      canvasContext.clearRect(0, 0, canvas.width, canvas.height);
      snowballs.map((snow) => drawSnowball(canvasContext, snow));

      snowballs.map((snow) => moveSnowBall(snow, canvas));
    }, 50);
  }

  run();
})();
