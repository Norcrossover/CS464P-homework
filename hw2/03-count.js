// Add your code here
const input = document.getElementById("userInput");

function handleKeyDown(event) {
  const textDiv = document.getElementById("paragraph");
  const textList = textDiv.textContent.split(" ");
  const userQuery = input.value;

  if (userQuery === "") {
    textDiv.innerHTML = textDiv.textContent;
    return;
  }

  const highlightedTextList = textList.map((text) => {
    if (!text.includes(userQuery)) return text;

    const highlightedText = text.replace(
      new RegExp(`\\b${userQuery}\\b`, "gi"), // credit to classmate Sri Lakishma for helping me fix this search using Regex
      `<span class="bg-warning">${userQuery}</span>`,
    );
    return highlightedText;
  });

  textDiv.innerHTML = highlightedTextList.join(" ");
}

input.addEventListener("keydown", handleKeyDown);
