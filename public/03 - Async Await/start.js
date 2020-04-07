(() => {
  // เริ่มเขียนโค้ด

  // 1. How Asynchronous code works in JavaScript
  // function simulateAsyncAPI(text, time){
  //   setTimeout( ()=>{console.log(text)}, time)
  // }

  // simulateAsyncAPI('A',1000);
  // simulateAsyncAPI('B',500);
  // simulateAsyncAPI('C', 100);
  // 2. Callback
  // function simulateAsyncAPI(text, time, callback){
  //     setTimeout( ()=>{console.log(text)
  //       if(callback){
  //         callback();
  //       }

  //     }, time)
  //   }

  //   simulateAsyncAPI('A',1000,()=>{
  //     simulateAsyncAPI('B', 500, ()=>{
  //       simulateAsyncAPI('C', 100)
  //     })
  //   });
  // 3. Promise

  // function simulateAsyncAPI(text, time) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log(text);
  //       resolve();
  //     }, time);
  //   });
  // }
  // simulateAsyncAPI("A", 1000)
  //   .then(() => {
  //     return simulateAsyncAPI("B", 500);
  //   })
  //   .then(() => {
  //     return simulateAsyncAPI("C", 100);
  //   });

  // 4. Async/Await
  function simulateAsyncAPI(text, time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(text);
        resolve();
      }, time);
    });
  }

  async function run() {
    await simulateAsyncAPI("AA", 1000);
    await simulateAsyncAPI("BB", 500);
    await simulateAsyncAPI("CC", 100);
  }
  run();
})();
