(() => {
  // เริ่มเขียนโค้ด
  const KEY = `d3ae38c3-95ba-4f11-a1f5-6d83ce783331`;

  async function getAirQuality({ city, country, state }) {
    const response = await fetch(
      `https://api.airvisual.com/v2/city?key=${KEY}&city=${city}&state=${state}&country=${country}`
    );
    const {
      data: { current },
    } = await response.json();
    const { pollution, weather } = current;

    return {
      aqi: pollution.aqius,
      humidity: weather.hu,
      temperature: weather.tp,
      windSpeed: weather.ws,
    };
  }

  function displayAirQuality({ aqi, humidity, temperature, windSpeed ,city , state, country }) {
    const cityElem = document.querySelector('.city');
    const stateCountryElem = document.querySelector('.state-country');
    const aqiElem = document.querySelector('.aqi > h1');
    const temperatureElem = document.querySelector('.temperature');
    const humidityElem = document.querySelector('.humidity');
    const windElem = document.querySelector('.wind');

    cityElem.innerHTML = city;
    stateCountryElem.innerHTML = `${state}, ${country}`
    aqiElem.innerHTML = aqi;
    temperatureElem.innerHTML = `${temperature} C`;
    humidityElem.innerHTML = `${humidity} %`;
    windElem.innerHTML = windSpeed;
    
  }

  function setColorBackgroundAQI(aqi){
    if(aqi <= 50){
      document.documentElement.style.setProperty('--current-aqi-color', 'var(--good-aqi-color)');
    }else if(aqi <=100){
      document.documentElement.style.setProperty('--current-aqi-color', 'var(--medium-aqi-color)');

    }else{
      document.documentElement.style.setProperty('--current-aqi-color', 'var(--bad-aqi-color)');

    }
  }

  async function run() {
    const city = `Sathon`;
    const state = `Bangkok`;
    const country = `Thailand`;

    const { aqi, humidity, temperature, windSpeed} = await getAirQuality({
      city,
      state,
      country,
    });

   await displayAirQuality({ aqi, humidity, temperature, windSpeed ,city , state, country});
    setColorBackgroundAQI(aqi);
  }

  run();
})();
