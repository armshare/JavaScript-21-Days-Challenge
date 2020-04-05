(() => {
  // เริ่มเขียนโค้ด
  const SECOND = 1000;
  const MINUTES = SECOND * 60;
  const HOURS = MINUTES * 60;
  const DAY = HOURS * 24;

  function setTextToElement(id , text){
    document.getElementById(id).innerHTML = text;
  }


  function countdown(){
    const now =  new Date().getTime();
    const lastDay = new Date("December 31, 2020").getTime();
    const timeDiff = lastDay - now;
   // console.log('time diff ', timeDiff);
    setTextToElement('days' , Math.floor(timeDiff/DAY) );
    setTextToElement('hours' , Math.floor(timeDiff%DAY / HOURS) );
    setTextToElement('minutes' , Math.floor(timeDiff % HOURS / MINUTES) );
    setTextToElement('seconds' , Math.floor(timeDiff % MINUTES / SECOND ) );
  }

  function run() {
    setInterval(countdown,1000)
    
  }
  run();
})();
