import readlineSync from 'readline-sync';

export default function sayHello() {
  // console.info('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i have you name?');

  console.info(`Hello, ${userName}!`);
}
