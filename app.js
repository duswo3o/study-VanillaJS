const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 모든 이벤트 리스너 함수의 첫 번째 인자는 항상 지금 막 벌어진 일들에 대한 정보
function onLoginSubmit(event) {
  // 보통 event로 작성하는 것이 관행
  event.preventDefault(); // 어떤 이벤트의 기본 행동이 발생하지 않도록 막음 -> submit의 경우 새로고침
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

// h1 태그에 username을 삽입해주는 부분 중복 -> 함수 생성
function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}
