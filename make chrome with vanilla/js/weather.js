import KEY from "./env.js";

const API_KEY = KEY.WEATHER_API_KEY;

// 위치정보를 받아오는데 성공했을 때 실행할 함수
function onGeoOk(position) {
  const lat = position.coords.latitude; // 위도
  const lng = position.coords.longitude; // 경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // html의 element 가져오기
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      // element안에 텍스트 삽입
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

// 위치정보를 받아오는데 실패했을 때 실행할 함수
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
