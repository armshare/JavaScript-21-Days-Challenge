(() => {
  // เริ่มเขียนโค้ด
  function setup() {
    const canvas = document.getElementById("falling-snow-canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    return {
      canvas,
      canvasContext: canvas.getContext("2d"),
      numberOfSnowballs: 250,
    };
  }

  function random(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
  }

  function createSnowballs(canvas, numberOfSnowballs) {
    return [...Array(numberOfSnowballs)].map((i) => {
      return {
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        opacity: random(0.5, 1),
        radius: random(1, 4),
        speedX : random(-5,5),
        speedy : random(1,3)
      };
    });
  }

  function drawSnowball(canvasContext, snowballs) {
    canvasContext.beginPath();
    canvasContext.arc(
      snowballs.x,
      snowballs.y,
      snowballs.radius,
      0,
      Math.PI * 2
    );
    canvasContext.fillStyle = `rgba(255, 255, 255, ${snowballs.opacity})`;
    canvasContext.fill();
  }

  function moveSnowball(snowball, canvas) {
    snowball.x += snowball.speedX;
    snowball.y += snowball.speedy;

    if(snowball.x > canvas.width){
      snowball.x = 0;
    }else if(snowball.x < 0 ){
      snowball.x = canvas.width;
    }

    if(snowball.y > canvas.height){
      snowball.y = 0;
    }
  }

  function run() {
    const { canvas, canvasContext, numberOfSnowballs } = setup();
    const snowballs = createSnowballs(canvas, numberOfSnowballs);
    
    setInterval(() => {
      canvasContext.clearRect(0,0,canvas.width, canvas.height);
      snowballs.forEach((element) => {
        drawSnowball(canvasContext, element);  
       
      });  // 
      snowballs.forEach((element) => {
        moveSnowball(element, canvas);
      }); 
    }, 50);
  }
  run();
})();
