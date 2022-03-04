const diceOne = document.getElementById("one");
const diceTwo = document.getElementById("two");
const diceThree = document.getElementById("three");
const diceFour = document.getElementById("four");
const diceFive = document.getElementById("five");
const diceSix = document.getElementById("six");

const dice = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];

const submitClick = (event) => {
  event.preventDefault();
  const value = document.getElementById("numDice").value;
  for (let i = 1; i <= value; i++) {
    const random = Math.floor(Math.random() * dice.length);
    console.log(random);
    console.log(value);
  }
};

document.querySelector(".form").addEventListener("submit", submitClick);
