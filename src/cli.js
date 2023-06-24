import readlineSync from 'readline-sync';

export default function sayHello() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i have you name?');

  console.log(`Hello, ${userName}!`);
}
