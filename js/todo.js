const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement; // 삭제하고싶은 li
  li.remove();
}

function paintToDo(newTodo) {
  // 태그 생성
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  // 태그 안에 텍스트 삽입
  span.innerText = newTodo;
  button.innerText = "❌";

  // 버튼 이벤트 생성
  button.addEventListener("click", deleteToDo);

  li.appendChild(span); // li에 span 추가
  li.appendChild(button); // li에 button 추가
  toDoList.appendChild(li); // ul에 li 추가
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // input의 현재 value를 새로운 변수에 복사
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; // 로컬스토리지에 값이 존자하면 기존의 값 복원
  parsedToDos.forEach(paintToDo);
}
