const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 캔버스에 그림을 그릴 때 사용

canvas.width = 800;
canvas.height = 800;

// 집 그리기
// 벽
ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);

// 문
// ctx.linewidth = 2; // 선 두께 조정
ctx.fillRect(300, 300, 50, 100);

// 천장
ctx.fillRect(200, 200, 200, 20);

// 지붕(삼각형)
ctx.moveTo(200, 200);
ctx.lineTo(325, 100);
ctx.lineTo(450, 200);
ctx.fill();
