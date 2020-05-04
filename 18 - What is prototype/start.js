(() => {
  // เริ่มเขียนโค้ด
  
  // 1. Class vs Prototype 
  // class Person{

  // }
  // const newPerson = new Person();
  //   console.log(newPerson);
  //   console.log(newPerson.__proto__);
  // // 2. What's prototype?
  // const name = 'Teerawut';
  // console.log(name.__proto__);
  // 3. Prototype chain
  // const name = 'Teerawut';
  // console.log(name.__proto__);  // no have toLocaleString();
  // console.log(name.toLocaleString()); // toLocaleString() from Class Object 

  // 4. Extend a prototype
  const name = 'Teerawut';
  function sayHello(val){
    console.log(`Hello ${val}`);
  }

  String.prototype.sayHello = sayHello;
  name.sayHello('World');
})();
