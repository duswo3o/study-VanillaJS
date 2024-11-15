const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 캔버스에 그림을 그릴 때 사용

// 입력받는 값
const lineWidth = document.getElementById("line-width"); // 선 두께
const color = document.getElementById("color"); // 색깔
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = lineWidth.value; // 선 두께

let isPainting = false; // 유저의 painting 상태

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = true; // 그림 그리는 중
}

function cancelPainting() {
  isPainting = false; // 그림 안그리는 중
}

function onLineWidthChange(event) {
  console.log(event.target.value);
  ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value; // 선 색깔 변경
  ctx.fillStyle = event.target.value; // 채우기 색깔 변경
}

function onColorClick(event) {
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue; // 선 색깔 변경
  ctx.fillStyle = colorValue; // 채우기 색깔 변경
  color.value = colorValue; // 박스 색깔 변경 (사용자에게 변경을 알려줌)
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
// document.addEventListener("mouseleave", cancelPainting)

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
