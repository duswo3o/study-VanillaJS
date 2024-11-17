const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // 캔버스에 그림을 그릴 때 사용

// 입력받는 값
const lineWidth = document.getElementById("line-width"); // 선 두께
const color = document.getElementById("colors"); // 색깔
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const fileInput = document.getElementById("file");
const textInput = document.getElementById("text");
const saveBtn = document.getElementById("save");

// 모드 변경 버튼
// const modeBtn = document.getElementById("mode-btn");
// 캔버스 초기화 버튼
const destroyBtn = document.getElementById("destroy-btn");
// 지우개 버튼
const eraserBtn = document.getElementById("eraser-btn");
// 텍스트 스타일 버튼
const textFillBtn = document.getElementById("text-style-btn");

// 그리기 모드 버튼
const drawMode = document.getElementById("draw-mode");
const fillMode = document.getElementById("fill-mode");
// 도형 버튼
const lineMode = document.getElementById("line-mode");
const squareMode = document.getElementById("square-mode");
const circleMode = document.getElementById("circle-mode");
const triangleMode = document.getElementById("triangle-mode");

const nowMode = document.getElementById("now-mode");
const nowShape = document.getElementById("now-shape");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = lineWidth.value; // 선 두께
ctx.lineCap = "round"; // 펜 둥글게 설정

let isPainting = false; // 유저의 painting 상태
let isFilling = false; // 유저의 그리기 모드
let textFilling = true; // 글자 채우기 모드
let shapeMode = "line";

function onMove(event) {
  if (isPainting) {
    if (shapeMode === "line" && isFilling === false) {
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.stroke();
      return;
    }
    // if (isFilling) {
    //   if (shapeMode === "line") {
    //     canvas.addEventListener("click", onCanvasClick);
    //     return;
    //   } else if (shapeMode === "square") {
    //     ctx.beginPath();
    //     ctx.fillRect(event.offsetX, event.offsetY, 100, 100);
    //     return;
    //   } else if (shapeMode === "circle") {
    //     ctx.beginPath();
    //     ctx.arc(event.offsetX, event.offsetY, 20, 0, 2 * Math.PI);
    //     ctx.fill();
    //     return;
    //   } else if (shapeMode === "triangle") {
    //     ctx.beginPath();
    //     drawTriangle(event);
    //     ctx.fill();
    //     return;
    //   }
    // } else {
    //   if (shapeMode === "line") {
    //     ctx.lineTo(event.offsetX, event.offsetY);
    //     ctx.stroke();
    //     return;
    //   } else if (shapeMode === "square") {
    //     ctx.strokeRect(event.offsetX, event.offsetY, 100, 100);
    //     return;
    //   } else if (shapeMode === "circle") {
    //     ctx.arc(event.offsetX, event.offsetY, 20, 0, 2 * Math.PI);
    //     ctx.stroke();
    //     return;
    //   } else if (shapeMode === "triangle") {
    //     drawTriangle(event);
    //     ctx.stroke();
    //     return;
    //   }
    // }
  }
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
}

function drawTriangle(event) {
  ctx.moveTo(event.offsetX + 50, event.offsetY);
  ctx.lineTo(event.offsetX, event.offsetY + 50 * 3 ** 0.5);
  ctx.lineTo(event.offsetX + 100, event.offsetY + 50 * 3 ** 0.5);
  ctx.lineTo(event.offsetX + 50, event.offsetY);
}

function startPainting() {
  isPainting = true; // 그림 그리는 중
}

function cancelPainting() {
  isPainting = false; // 그림 안그리는 중
  // ctx.fill();
  // ctx.beginPath();
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

// function onModeClick() {
//   if (isFilling) {
//     isFilling = false;
//     modeBtn.innerText = " ✏️ Draw";
//   } else {
//     isFilling = true;
//     modeBtn.innerText = "💧 Fill";
//   }
// }

function onCanvasClick(event) {
  // if (isFilling) {
  //   ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  // }
  if (isFilling) {
    if (shapeMode === "line") {
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      // canvas.addEventListener("click", onCanvasClick);
      // return;
    } else if (shapeMode === "square") {
      ctx.beginPath();
      ctx.fillRect(event.offsetX, event.offsetY, 100, 100);
      return;
    } else if (shapeMode === "circle") {
      ctx.beginPath();
      ctx.arc(event.offsetX, event.offsetY, 20, 0, 2 * Math.PI);
      ctx.fill();
      return;
    } else if (shapeMode === "triangle") {
      ctx.beginPath();
      drawTriangle(event);
      ctx.fill();
      return;
    }
  } else {
    if (shapeMode === "line") {
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.stroke();
      return;
    } else if (shapeMode === "square") {
      ctx.strokeRect(event.offsetX, event.offsetY, 100, 100);
      return;
    } else if (shapeMode === "circle") {
      ctx.arc(event.offsetX, event.offsetY, 20, 0, 2 * Math.PI);
      ctx.stroke();
      return;
    } else if (shapeMode === "triangle") {
      drawTriangle(event);
      ctx.stroke();
      return;
    }
  }
}

function onDestroyClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraserClick() {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill";
}

function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file); // 유저가 파일을 업로드한 브라우저에서만 사용 가능한 url

  const image = new Image(); // <img src="" />, document.createElement("img")와 같음
  image.src = url;

  // 이미지가 로드되었을 때 함수 실행
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null;
  };
}

function onDoubleClick(event) {
  const text = textInput.value;
  if (text !== "") {
    ctx.save(); // 현재 상태, 색상, 스타일 등을 저장
    ctx.lineWidth = 1; // 텍스트 입력을 위해 라인 두께 변경
    ctx.font = "48px serif ";
    if (textFilling) {
      ctx.fillText(text, event.offsetX, event.offsetY);
    } else {
      ctx.strokeText(text, event.offsetX, event.offsetY);
    }
    ctx.restore(); // 이전 저장상태로 복구
  }
}

function onSaveClick() {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "myDrawing.png";
  a.click();
}

function onTextStyleClick() {
  if (textFilling) {
    textFilling = false;
    textFillBtn.innerText = "empty Text";
  } else {
    textFilling = true;
    textFillBtn.innerText = "filled Text";
  }
}

function onChangeShape(event) {
  shapeMode = event.target.dataset.shape;
  nowShape.innerText = shapeMode;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
// document.addEventListener("mouseleave", cancelPainting)
canvas.addEventListener("click", onCanvasClick);
canvas.addEventListener("dblclick", onDoubleClick);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach((color) => color.addEventListener("click", onColorClick));

// modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);

textFillBtn.addEventListener("click", onTextStyleClick);

drawMode.addEventListener("click", function () {
  isFilling = false;
  nowMode.innerText = "✏️ Draw";
});
fillMode.addEventListener("click", function () {
  isFilling = true;
  nowMode.innerText = "💧 Fill";
});
lineMode.addEventListener("click", onChangeShape);
squareMode.addEventListener("click", onChangeShape);
circleMode.addEventListener("click", onChangeShape);
triangleMode.addEventListener("click", onChangeShape);
