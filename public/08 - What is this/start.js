(() => {
  // เริ่มเขียนโค้ด

  // 1. Lexical scope & Dynamic scope
  // function printName(){
  //   console.log(this)
  // }
  // printName();

  // 2. How to know what is "this"?
  // function printName() {
  //   console.log(this);
  //   console.log(`My name is ${this.name}`)
  // }
  //// 2.1 Invoker object
  // const teerawut = {name: 'Teerawut'  , printName}
  // const arm = {name: 'arm'  , printName}
  // printName()
  // teerawut.printName();
  // arm.printName();
  //// 2.2 Global object (window, global)
  // name = "Global";
  // printName();

  //// 2.3 Constructor function
  // function Person(name){
  //   this.name = name;
  //   this.printName = printName;
  // }

  // const teerawut = new Person('Teerawut');
  // teerawut.printName()

  // 3. call(), apply(), and bind()
  function printName( nation, city) {
    console.log(this);
    console.log(
      `My name is ${this.name}, I am a ${nation}, I lives in ${city}`
    );
  }

  function Person(name, nation, city){
    this.name = name,
    this.nation = nation,
    this.city = city

    printName(this.nation, this.city);
    printName.call(this, this.nation, this.city);
    printName.apply(this,[this.nation, this.city]);
    const printArmName = printName.bind(this, this.nation, this.city);
    printArmName();
  }

  const teerawut = new Person('Teerawut', 'Thai' , 'Bangkok');
})();
