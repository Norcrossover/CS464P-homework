const elem = document.querySelector("input");
const resultDiv = document.querySelector(".result");

elem.addEventListener("input", handleInput);

function palindromeAlgorithm(userInput) {
  let originalNumber = userInput;
  let reversedNumber = 0;

  while (userInput > 0) {
    userInput = reversedNumber * 10 + (userInput % 10);
    reversedNumber = Math.floor(userInput / 10);
  }

  return originalNumber === reversedNumber;
}

function isPalindrome(userInput) {
  if (typeof userInput != "number") return false;
  if (userInput < 0) return false;
  return palindromeAlgorithm(userInput);
}

function handleInput(event) {
  const userInput = Number(event.target.value);

  if (isPalindrome(userInput)) {
    resultDiv.textContent = "Yes. This is a palindrome!";
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = "No. Try again.";
    resultDiv.style.color = "red";
  }
}
