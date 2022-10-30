const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.getElementsByClassName("slide");
const navContainer = document.querySelector(".nav-bubbles");
const numOfSlides = slides.length - 1;
let bubbles;
let curSlide = 0;

const changeSlide = (change, bubble = 0) => {
  slides[curSlide].classList.remove("active");
  bubbles[curSlide].classList.remove("active");
  if (bubble) curSlide = change;
  else if (change === 1 && curSlide === numOfSlides) curSlide = 0;
  else if (change === 1) ++curSlide;
  else if (change === -1 && curSlide === 0) curSlide = numOfSlides;
  else if (change === -1) --curSlide;
  slides[curSlide].classList.add("active");
  bubbles[curSlide].classList.add("active");

  console.log(curSlide);
};

const generateBubbles = () => {
  for (let i = 0; i <= numOfSlides; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    if (i === 0) bubble.classList.add("active");
    bubble.addEventListener("click", () => changeSlide(i, "bubble"));
    navContainer.appendChild(bubble);
  }
  bubbles = document.getElementsByClassName("bubble");
};

prev.addEventListener("click", (e) => {
  changeSlide(-1);
});

next.addEventListener("click", (e) => {
  changeSlide(1);
});

generateBubbles();
