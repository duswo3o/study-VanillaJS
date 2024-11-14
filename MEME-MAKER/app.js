const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 캔버스에 그림을 그릴 때 사용

canvas.width = 800;
canvas.height = 800;

// 사각형 만들기
ctx.fillRect(50, 50, 100, 200) // 즉시 색으로 채우기