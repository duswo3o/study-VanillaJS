const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // html에 이미지 태그 생성
bgImage.src = `img/${chosenImage}`;

// html의 body 태그 안에 추가
document.body.appendChild(bgImage);
