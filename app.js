"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

function initApp() {
  // Harry Potter
  const potterName = "Harry Potter";
  const potterGender = "male";
  const potterHouse = "Gryffindor";
  const potterDateOfBirth = "31-07-1980";
  const potterAncestry = "half-blood";
  const potterEyeColour = "green";
  const potterHairColour = "black";
  const potterActor = "Daniel Radcliffe";
  const potterImage = "http://hp-api.herokuapp.com/images/harry.jpg";

  showCharacter(
    potterName,
    potterGender,
    potterHouse,
    potterDateOfBirth,
    potterAncestry,
    potterEyeColour,
    potterHairColour,
    potterActor,
    potterImage
  );
}

// function showCharacter(
//   name,
//   gender,
//   house,
//   dateOfBirth,
//   ancestry,
//   eyeColour,
//   hairColour,
//   actor,
//   image
// ) {
//   const articleElement = document.createElement("article");
//   const imageElement = document.createElement("img");
//   const nameElement = document.createElement("h2");
//   const houseElement = document.createElement("p");
//   const dateOfBirthElement = document.createElement("p");
//   const actorElement = document.createElement("p");

//   imageElement.src = image;
//   nameElement.textContent = name;
//   houseElement.textContent = house;
//   dateOfBirthElement.textContent = `Date of Birth: ${dateOfBirth}`;
//   actorElement.textContent = `${actor} is played by ${actor}`;

//   articleElement.appendChild(imageElement);
//   articleElement.appendChild(nameElement);
//   articleElement.appendChild(houseElement);
//   articleElement.appendChild(dateOfBirthElement);
//   articleElement.appendChild(actorElement);

//   articleElement.append(
//     imageElement,
//     nameElement,
//     houseElement,
//     dateOfBirthElement,
//     actorElement
//   );

//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }

function showCharacter(
  name,
  gender,
  house,
  dateOfBirth,
  ancestry,
  eyeColour,
  hairColour,
  actor,
  image
) {
  const charHTML = /*html*/ `
          <article><img src="${image}">
                <h2>${name}</h2>
                <p>${house}</p>
                <p>Date of Birth: ${dateOfBirth}</p>
                <p>Played by ${actor}</p>
            </article>
            `;

  document
    .querySelector("#characters")
    .insertAdjacentHTML("beforeend", charHTML);
}
