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
<tr>
            <td><img src="${image}" /></td>
            <td>${name}</td>
            <td>${house}</td>
            <td>${gender}</td>
            <td>${dateOfBirth}</td>
          </tr>
            `;

  document
    .querySelector("#characters")
    .insertAdjacentHTML("beforeend", charHTML);

  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
