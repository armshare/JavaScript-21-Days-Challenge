(() => {
  // เริ่มเขียนโค้ด

  // 1. NaN
  if(1/'test' == NaN){
    console.log('is NaN');
  }
  if (NaN !== NaN) {
    console.log('NaN is super strange!!');
  }

  if (Number.isNaN(NaN)) {
    console.log('NaN is working correctly');
  }

  // 2. Type Coercion

  if (3 > 2 > 1) {
    console.log('Type coercion makes it become falsy');
  }

  console.log(1 + '2');
  console.log(true + true);
  // 3. Interpreter & Compiler
  function getName(){
    return {
      name :'Teerawut'
    };
  }
  console.log(getName());
  // 4. Checking Object Type

  const temp = null;
  if( typeof temp === 'object' && temp !== null){
    console.log('checked is Object');
  }
})();
