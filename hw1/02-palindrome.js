const elem = document.querySelector("input");
const resultDiv = document.querySelector(".result");

elem.addEventListener("input", handleInput);

function isPalindrome(userInput) {
  let orignalNumber = userInput;
  let reversedNumber = 0;

  while (userInput > 0) {
    reversedNumber = reversedNumber * 10 + (userInput % 10);
    userInput = Math.floor(userInput / 10);
  }

  return orignalNumber === reversedNumber;
}

function isPalindrome(userInput) {
  return palindromeAlgorithm(userInput);
}

function handleInput(event) {
  // clear displayed messages when input is empty
  if (event.target.value === "") {
    resultDiv.textContent = "";
    return;
  }

  let msg = "";
  let color = "";

  const userInput = Number(event.target.value);

  if (typeof userInput != "number") {
    color = "red";
    message = "No, please enter a number.";
  }

  if (userInput < 0) {
    color = "red";
    message = "No, please enter a positive number.";
  }

  if (isPalindrome(userInput)) {
    msg = "Yes. This is a palindrome!";
    color = "green";
  } else {
    msg = "No. Try again.";
    color = "red";
  }

  resultDiv.textContent = msg;
  resultDiv.style.color = color;
}
