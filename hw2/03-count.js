// Add your code here
const input = document.getElementById("userInput");

function handleKeyDown(event) {
  const textDiv = document.getElementById("paragraph");
  const textList = textDiv.textContent.split(" ");
  const userQuery = input.value.toLowerCase();

  if (userQuery === "") {
    textDiv.innerHTML = textDiv.textContent;
    return;
  }

  const highlightedTextList = textList.map((text) => {
    const lowerCaseText = text.toLowerCase();

    if (lowerCaseText.includes(userQuery)) {
      return text.split(userQuery).join(`<mark>${userQuery}</mark>`);
    }
    return text;
  });

  textDiv.innerHTML = highlightedTextList.join(" ");
}

input.addEventListener("keydown", handleKeyDown);
