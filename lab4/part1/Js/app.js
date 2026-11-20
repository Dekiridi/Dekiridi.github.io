// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings

// Willy the Goblin
// Big Daddy
// Father Christmas

// the soup kitchen
// Disneyland
// the White House

// spontaneously combusted
// melted into a puddle on the sidewalk
// turned into a slug and slithered away

// Partial return random string function
const randrandomCharacter = randomValueFromArray(characters);
const randrandomPlace = randomValueFromArray(places);
const randrandorandomEvent = randomValueFromArray(actions);
function returnRandomStoryString() {
  let storyText = `It was 94 Fahrenheit outside, so ${randrandomCharacter} went for a walk. When they got to ${randrandomPlace}, they stared in horror for a few moments, then ${randrandorandomEvent}. Bob saw the whole thing, but was not surprised — ${randrandomCharacter} weighs 300 pounds, and it was a hot day.`;

  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  if (customName.value !== "") {
    const name = customName.value;
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature = Math.round(94);
  }

  // TODO: replace "" with the correct expression
  story.textContent = "";
  story.style.visibility = "visible";
}