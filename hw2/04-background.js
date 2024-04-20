const intervalButton = document.getElementById("intervalButton");
const numberInput = document.getElementById("numberInput");
const pageBackground = document.getElementById("pageBackground");

// the colors I wanted to switch between - a color pallete I really liked
const colors = [
  "hsla(278, 35%, 78%, 0.3)", // light purple
  "hsla(337, 100%, 89%, 0.3)", // lighter pipnk
  "hsla(338, 100%, 84%, 0.3)", // light pink
  "hsla(208, 97%, 87%, 0.3)", // lighter blue
  "hsla(209, 100%, 82%, 0.3)", // light blue
];

let intervalId;

// Derived from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function changeBackground() {
  // const color = colors[getRandomInt(colors.length)]; // uses the color pallete
  const color = `hsla(${getRandomInt(360)}, ${getRandomInt(100)}%, ${getRandomInt(100)}%, 0.2)`; // generates any random color with low alpha value
  pageBackground.style.backgroundColor = color;
}

function handleClick(event) {
  if (intervalButton.value === "Start") {
    intervalButton.value = "Stop";
    intervalButton.className = "btn btn-danger";
    intervalId = setInterval(changeBackground, numberInput.value * 1000);
  } else {
    intervalButton.value = "Start";
    intervalButton.className = "btn btn-primary";
    clearInterval(intervalId);
    intervalId = null;
  }
}

intervalButton.addEventListener("click", handleClick);
