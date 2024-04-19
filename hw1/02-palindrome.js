const elem = document.querySelector('input');
const resultDiv = document.querySelector('.result');

elem.addEventListener('input', handleInput);

function isPalindrome(userInput) {
  let orignalNumber = userInput;
  let reversedNumber = 0;

  while (userInput > 0) {
    reversedNumber = reversedNumber * 10 + userInput % 10;
    userInput = Math.floor(userInput / 10);
  }

  return orignalNumber === reversedNumber;
}

function handleInput(event) {
  let msg = "";
  let color = "";
  const userInput = parseInt(event.target.value);
  
  if (typeof(userInput) != "number") {
    msg = "No, the value entered is not a number, please enter a number.";
    color = "red";
  }

  if (userInput < 0) {
    msg = "No, you entered a negative number, please ensure that it is positive."
    color = "red";
  }

  if (isPalindrome(userInput)) {
    msg = "Yes. This is a palindrome!";
    color = 'green';
  } else {
    msg = "No. Try again.";
    color = 'red';
  }
  resultDiv.textContent = msg;
  resultDiv.style.color = color;
}