const apiKey = "19ccc1a00c49167f863f36f7960d3d5b";

const apiKUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=matric&q=";

const weatherApp = document.querySelector(".weather");

const inputSearch = document.querySelector("#inputSearch");

const btn = document.querySelector("#btn");

const tempImg = document.querySelector("#tempImg");

const tempVal = document.querySelector("#tempVal");

const tempName = document.querySelector("#tempName");

const wind = document.querySelector("#wind");

const hum = document.querySelector("#humidity");

const error = document.querySelector(".error");

const slide = document.querySelector("#slide");

async function checkWeather(cityName) {
  const response = await fetch(apiKUrl + cityName + `&appid=${apiKey}`);

  if (response.status == 404) {
    error.style.display = 'block';
    weatherApp.style.display = 'none';
  } else {

    let data = await response.json();

  console.log(data);

  tempName.textContent = data.name;
  tempVal.textContent = Math.round(data.main.temp) + "°C";
  hum.textContent = data.main.humidity + "%";
  wind.textContent = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clear") {
    tempImg.src = "clear.png";
  } else if (data.weather[0].main == "Clouds") {
    tempImg.src = "clouds.png";
  } else if (data.weather[0].main == "Drizzle") {
    tempImg.src = "drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    tempImg.src = "mist.png";
  } else if (data.weather[0].main == "Rain") {
    tempImg.src = "rain.png";
  } else if (data.weather[0].main == "Snow") {
    tempImg.src = "snow.png";
  }

  weatherApp.style.display = "block";
  error.style.display = "none";

  }
  
}
btn.addEventListener("click", (e) => {
  e.preventDefault();
  checkWeather(inputSearch.value);
});

//slider

let weatherBackgroundImages = [
  'pexels-anton-kudryashov-12372781.jpg',
  'pexels-anton-kudryashov-12372779.jpg',
  'pexels-amol-mande-2684011.jpg',
  'pexels-johannes-plenio-1102915.jpg',
  'pexels-johannes-plenio-1118873.jpg',
  'pexels-kaan-demircan-11019539.jpg',
]

let picLen = weatherBackgroundImages.length;

let picCount = 0;

const slider = () => {
slide.src = weatherBackgroundImages[picCount];
 picCount++;
 if (picCount > picLen -1) {
  picCount = 0;
 }
 setTimeout(slider , 3000);

};
