"use strict";

// ============ Global Variables ============ //
const potterName = "Harry Potter";
const potterGender = "male";
const potterHouse = "Gryffindor";
const potterDateOfBirth = "31-07-1980";
const potterAncestry = "half-blood";
const potterEyeColour = "green";
const potterHairColour = "black";
const potterActor = "Daniel Radcliffe";
const potterImage = "http://hp-api.herokuapp.com/images/harry.jpg";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

function initApp() {
    console.log(
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
