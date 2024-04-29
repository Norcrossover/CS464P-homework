import { characters } from "./02-data.js";

const userInput = document.getElementById("userInput");
const searchButton = document.getElementById("search");
const cardContainer = document.getElementById("cardContainer");

function createCard(title, body) {
  const card = document.createElement("div");
  const cardContent = document.createElement("div");
  const cardTitle = document.createElement("h5");
  const cardBody = document.createElement("p");
  card.className = "card justify-content-center";
  cardContent.className = "card-body";
  card.style.maxWidth = "200px";
  cardTitle.innerHTML = title;
  cardBody.textContent = body;
  cardContent.appendChild(cardTitle);
  cardContent.appendChild(cardBody);
  card.appendChild(cardContent);
  cardContainer.appendChild(card);
  return card;
}

function handleClick() {
  const characterQuery = userInput.value;
  const matchingCharacters = [];

  //   Clear the container before performing a new search
  cardContainer.innerHTML = "";

  if (characterQuery === "") {
    const card = createCard(
      "Didn't provide Anything",
      "Please try typing a charcter's name :)",
    );
    card.style.color = "red";
    return;
  }

  characters.forEach((character) => {
    if (character.name.includes(characterQuery)) {
      matchingCharacters.push(character);
    }
  });

  if (matchingCharacters.length === 0) {
    const card = createCard(
      "No characters found",
      "I'm sorry, the name you provided could not be found, please try again!",
    );
    card.style.color = "red";
    return;
  }

  matchingCharacters.forEach((character) => {
    // split the name and encapsulate the matching name in a mark element
    const title = character.name
      .split(characterQuery)
      .join(`<span class="bg-warning">${characterQuery}</span>`);
    const body = `Birth year: ${character.birth_year}`;
    createCard(title, body);
  });
}

searchButton.addEventListener("click", handleClick);
