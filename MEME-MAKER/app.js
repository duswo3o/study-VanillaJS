const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 캔버스에 그림을 그릴 때 사용

canvas.width = 800;
canvas.height = 800;

// 사각형 만들기
ctx.rect(50, 50, 100, 100); // 선 만들기
ctx.rect(150, 150, 100, 100); // 선 만들기
ctx.rect(250, 250, 100, 100); // 선 만들기
ctx.fill();

ctx.beginPath(); // 새 경로 생성
ctx.rect(350, 350, 100, 100); // 선 만들기
ctx.rect(450, 450, 100, 100); // 선 만들기
ctx.fillStyle = "red";
ctx.fill();
// setTimeout(() => {
//   ctx.fill();
// }, 5000);
