// define page elements
const intervalButton = document.getElementById("intervalButton");
const numberInput = document.getElementById("numberInput");
const pageBackground = document.getElementById("pageBackground");

// event listeners
intervalButton.addEventListener("click", handleClick);

function handleClick(event) {
  const intervalLength = numberInput.value;
  // change the interval button
  if (intervalButton.value === "Start") {
    intervalButton.value = "Stop";
  } else {
    intervalButton.value = "Start";
  }
  // change to a random color when interval timing changes
}
