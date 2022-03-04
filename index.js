// const diceOne = document.getElementById("one");
// const diceTwo = document.getElementById("two");
// const diceThree = document.getElementById("three");
// const diceFour = document.getElementById("four");
// const diceFive = document.getElementById("five");
// const diceSix = document.getElementById("six");

// const dice = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];

const submitClick = (event) => {
  event.preventDefault();
  const value = document.getElementById("numDice").value;
  let result = document.querySelector(".result");

  if ("content" in document.createElement("template")) {
    let template = document.querySelector("template");
    let clone = template.content.cloneNode(true);
    let face = clone.querySelectorAll(".face");
    const dice = [face[0], face[1], face[2], face[3], face[4], face[5]];

    for (let i = 1; i <= value; i++) {
      const random = Math.floor(Math.random() * dice.length);
      const newDice = dice[random].cloneNode(true);
      result.appendChild(newDice);
      console.log(result);
    }
  }
  result.remove();
};

document.querySelector(".form").addEventListener("submit", submitClick);
