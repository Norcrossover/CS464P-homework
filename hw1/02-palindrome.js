const elem = document.querySelector('input');
const resultDiv = document.querySelector('.result');

elem.addEventListener('input', handleInput);

function isPalindrome(userInput) {
  if (typeof(userInput) != "number")
    return false;

  if (userInput < 0)
    return false;
  
  let orignalNumber = userInput;
  let reversedNumber = 0;

  while (userInput > 0) {
    reversedNumber = reversedNumber * 10 + userInput % 10;
    userInput = Math.floor(userInput / 10);
  }

  return orignalNumber === reversedNumber;
}

function handleInput(event) {
  const userInput = Number(event.target.value);
  let msg = "";
  if (isPalindrome(userInput)) {
    msg = "Yes. This is a palindrome!";
    resultDiv.style.color = 'green';
  } else {
    msg = "No. Try again.";
    resultDiv.style.color = 'red';
  }
  resultDiv.textContent = msg;
}