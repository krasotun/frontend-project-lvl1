import readlineSync from "readline-sync";

export function sayHello() {
  const userName = readlineSync.question("May i have you name?");

  console.log(`Hello, ${userName}!`);
}
