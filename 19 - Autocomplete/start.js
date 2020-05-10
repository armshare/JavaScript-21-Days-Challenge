(() => {
  const carBrands = [
    "Honda",
    "Nissan",
    "Mazda",
    "Mercedes Benz",
    "BMW",
    "Toyota",
  ];

  const searchElem = document.querySelector(".search");
  function clearResult() {
    const ulElem = document.querySelector("ul");
    if (ulElem) {
      document.body.removeChild(ulElem);
    }
  }
  function selectCar(e) {
    console.log(e.target.innerText);
    searchElem.value = e.target.innerText;
    clearResult();
  }

  function onInput(e) {
    const carInput = e.target.value.toLowerCase();
    const resultSearch = carBrands.filter((car) =>
      car.toLowerCase().startsWith(carInput)
    );
    clearResult();
    const ulElem = document.createElement("ul");
    ulElem.classList.add("results");

    resultSearch.forEach((res) => {
      const liElem = document.createElement("li");
      liElem.innerText = res;
      liElem.onclick = selectCar;
      ulElem.appendChild(liElem);
    });

    document.body.appendChild(ulElem);

    console.log(ulElem);
  }

  function run() {
    searchElem.addEventListener("input", onInput);

    document.addEventListener('click', clearResult)
  }

  run();
})();
