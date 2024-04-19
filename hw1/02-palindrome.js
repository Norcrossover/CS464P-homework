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

  return originalNumber === reversedNumber;
}

function isPalindrome(userInput) {
  if (typeof userInput != "number") return false;
  if (userInput < 0) return false;
  return palindromeAlgorithm(userInput);
}

function handleInput(event) {
  if (event.target.value === "") {
    resultDiv.textContent = "";
    return;
  }

  const userInput = Number(event.target.value);

  if (isPalindrome(userInput)) {
    msg = "Yes. This is a palindrome!";
    resultDiv.style.color = 'green';
  } else {
    msg = "No. Try again.";
    color = 'red';
  }
  resultDiv.textContent = msg;
  resultDiv.style.color = color;
}
