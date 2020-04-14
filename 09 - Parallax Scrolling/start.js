(() => {
  // เริ่มเขียนโค้ด
function onscroll(){
  const moon =  document.querySelector('.moon');
  const label = document.querySelector('.wish');

  moon.style.transform = `translate(${window.scrollY * 0.7}%  , ${window.scrollY * -0.7}%)`;
  label.style.transform = `translateY( ${window.scrollY * -1.7}%)`
}


  function run(){
    document.addEventListener('scroll', onscroll);
  }
  run();
})();
