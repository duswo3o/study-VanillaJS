// 위치정보를 받아오는데 성공했을 때 실행할 함수
function onGeoOk(position) {
  const lat = position.coords.latitude; // 위도
  const lng = position.coords.longitude; // 경도
  console.log("you live in", lat, lng);
}

// 위치정보를 받아오는데 실패했을 때 실행할 함수
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
