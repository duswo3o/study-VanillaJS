const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); // 웹사이트가 로드되자마자 getClock을 실행하고 매 초마다 실행
setInterval(getClock, 1000);
