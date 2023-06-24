import readlineSync from 'readline-sync';

export default function sayHello() {
  const userName = readlineSync.question('May i have you name?');

  console.info(`Hello, ${userName}!`);
}
