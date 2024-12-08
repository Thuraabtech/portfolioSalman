//typing
const typingEffect = document.getElementById("typing-effect");
const textArray = ["Frontend Developer", "MERN STACK", "YOUTUBER", "MENTOR", "ML ENTHUSIAST"];
let index = 0;
let currentTextIndex = 0;
let letterIndex = 0;

function typeText() {
  if (letterIndex < textArray[currentTextIndex].length) {
    typingEffect.textContent += textArray[currentTextIndex][letterIndex];
    letterIndex++;
  } else {
    setTimeout(() => {
      typingEffect.textContent = "";
      letterIndex = 0;
      currentTextIndex++;
      if (currentTextIndex >= textArray.length) {
        currentTextIndex = 0;
      }
    }, 2000);
  }
}

setInterval(typeText, 100);
//skill card
let currentSlide = 0;

function slideSkills(direction) {
  const container = document.querySelector('.skills-container');
  const cardWidth = document.querySelector('.skills-card').offsetWidth + 40; // Adjust with margin
  const maxSlides = document.querySelectorAll('.skills-card').length;

  currentSlide = Math.max(0, Math.min(currentSlide + direction, maxSlides - 1));
  const translateValue = -currentSlide * cardWidth;
  container.style.transform = `translateX(${translateValue}px)`;
}
//background