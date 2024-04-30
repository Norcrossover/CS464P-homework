const modalContent = document.getElementById("modalBodyContent");
document.querySelector("form").addEventListener("submit", handleSubmission);

function createCheckboxElement(inputElement) {
  const newElement = document.createElement("p");
  newElement.textContent = `${inputElement.checked ? "Has taken " : "Has NOT taken "}: ${inputElement.value}.`;
  modalContent.appendChild(newElement);
}

function createTextInputElement(inputElement, inputDescription) {
  const newElement = document.createElement("p");
  newElement.innerHTML = `<strong>${inputDescription}</strong>: ${inputElement.value !== "" ? inputElement.value : `No ${inputDescription.toLowerCase()} provided`}`;
  modalContent.appendChild(newElement);
}

function handleSubmission(event) {
  modalContent.innerHTML = "";
  event.preventDefault();

  createTextInputElement(document.getElementById("name"), "Full Name");
  createTextInputElement(document.getElementById("email"), "Email");
  createTextInputElement(
    document.getElementById("registrationStatus"),
    "Registration Status",
  );
  createCheckboxElement(document.getElementById("programmingLanguages"));
  createCheckboxElement(document.getElementById("operatingSystems"));
  createCheckboxElement(document.getElementById("fullStackWebDevelopment"));

  createTextInputElement(
    document.getElementById("comments"),
    "Additional Comments",
  );

  bootstrap.Modal.getOrCreateInstance(
    document.getElementById("submissionModal"),
  ).show();
}
