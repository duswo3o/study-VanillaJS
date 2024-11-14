const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 캔버스에 그림을 그릴 때 사용

canvas.width = 800;
canvas.height = 800;

// 사람 그리기
// 팔
ctx.fillRect(210 - 40, 200 - 30, 15, 100);
ctx.fillRect(350 - 40, 200 - 30, 15, 100);

// 몸통
ctx.fillRect(260 - 40, 200 - 30, 60, 200);

// 머리
ctx.arc(250, 100, 50, 0, 2 * Math.PI);
ctx.fill();

// 눈
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(260 + 10, 80 + 10, 8, Math.PI, 2 * Math.PI);
ctx.arc(220 + 10, 80 + 10, 8, Math.PI, 2 * Math.PI);
ctx.fill();
