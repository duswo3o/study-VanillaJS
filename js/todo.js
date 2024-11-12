const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");

  // span이 li 안에 있지 않기 때문에 안에 속하도록 변경
  li.appendChild(span);
  span.innerText = newTodo;

  // todolist에 li 추가하기
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // input의 현재 value를 새로운 변수에 복사
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
