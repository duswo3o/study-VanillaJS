const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("Hello");
}

// sayHello 함수를 5000ms(5초) 마다 실행
setInterval(sayHello, 5000);
