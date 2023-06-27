import "./style.css";
//import typescriptLogo from "./typescript.svg";
//import viteLogo from "/vite.svg";
//import { setupCounter } from "./counter.ts";

//Practice Creating a Variable of Coffees Drank
const numberOfCupsOfCoffee = 3;
//storing my Ful Name under the variable fullName
const fullName = "Eduard Huapaya";
// Printing out the full Name and amount of Coffees
console.log(`I ${fullName} drink about ${numberOfCupsOfCoffee} coffees a day `);

//Creating an Object with properties
const aboutMe = {
  fullName,
  luckyNumber: 24,
  favoriteMovies: [`Inception`, `The Batman: DarkNight`, `Toy-Story`],
};

//Printing out the properties from the OBJECT
console.log(
  `I ${aboutMe.fullName} luckiest number is ${aboutMe.luckyNumber} and my favorite movies are ${aboutMe.favoriteMovies} `
);

//Asking for their name
const userName = window.prompt(`Hi, what is your name?: `);
//Printing out their name
console.log(`Hi ${userName}, Have a great day!`);

//Asking for numbers turning them into strings
console.log(`Let's begin, what are your favorite numbers. Let's pick two!?: `);

const userNameNumberOne = window.prompt(
  `What is your first favorite Number?: `
);
const userNameNumberTwo = window.prompt(
  `What is your second favorite Number?: `
);

const firstNumber = Number(userNameNumberOne);
const secondNumber = Number(userNameNumberTwo);

//using The numbers Given by MATH

let sum = firstNumber + secondNumber;
let difference = firstNumber - secondNumber;
let product = firstNumber * secondNumber;
let quotient = firstNumber / secondNumber;
let remainder = firstNumber % secondNumber;

console.log(`The sum of ${firstNumber} amd ${secondNumber} is ${sum}`);

//document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
//<div>
//  <a href="https://vitejs.dev" target="_blank">
//    <img src="${viteLogo}" class="logo" alt="Vite logo" />
// </a>
//  <a href="https://www.typescriptlang.org/" target="_blank">
//    <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//   </a>
//  <h1>Vite + TypeScript</h1>
//  <div class="card">
//    <button id="counter" type="button"></button>
//   </div>
//   <p class="read-the-docs">
//    Click on the Vite and TypeScript logos to learn more
//  </p>
//// </div>
//`;

//setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
