const quotes = [
  { quote: "삶이 있는 한 희망은 있다.", author: "키케로" },
  { quote: "아는 것이 힘이다.", author: "프랜시스 베이컨" },
  {
    quote:
      "대부분의 사람들은 삶을 이끌어 가지 않고, 단지 삶에 따라 흘러갈 뿐이다.",
    author: "세네카",
  },
  { quote: "삶은 선택의 연속이다.", author: "윌리엄 제임스" },
  { quote: "모든 위대한 것은 꿈에서 시작된다.", author: "엘리노어 루스벨트" },
  { quote: "성공은 실패의 연속에서 비롯된다.", author: "콘래드 힐튼" },
  {
    quote: "우리가 변화를 만들지 않으면, 변화가 우리를 만든다.",
    author: "영국 속담",
  },
  { quote: "나를 죽이지 않는 고통은 나를 더 강하게 만든다.", author: "니체" },
  { quote: "성공으로 가는 길은 늘 공사 중이다.", author: "릴리 톰린" },
  {
    quote: "삶은 10%는 우리가 겪는 일이고, 90%는 그에 어떻게 반응하느냐이다.",
    author: "찰스 R. 스윈돌",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
