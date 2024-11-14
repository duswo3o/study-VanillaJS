const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 캔버스에 그림을 그릴 때 사용

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2; // 선 두께

const colors = [
  "#4CAF50",
  "#FF6F61",
  "#2196F3",
  "#FFC107",
  "#9C27B0",
  "#795548",
  "#E91E63",
  "#607D8B",
];

// 클릭 이벤트
function onClick(event) {
  ctx.beginPath();
  ctx.moveTo(0, 0); // 시작 좌표
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY); // 클릭된 캔버스 내의 좌표
  ctx.stroke();
}

canvas.addEventListener("mousemove", onClick);
