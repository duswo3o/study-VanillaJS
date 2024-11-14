const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 캔버스에 그림을 그릴 때 사용

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2; // 선 두께

let isPainting = false; // 유저의 painting 상태

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = true; // 그림 그리는 중
}

function cancelPainting() {
  isPainting = false; // 그림 안그리는 중
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
// document.addEventListener("mouseleave", cancelPainting)
