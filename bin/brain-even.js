#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name?');
console.log(`Hello, ${userName}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (number) => number % 2 === 0;

let i = 0;
do {
  const question = Math.floor(Math.random() * 100);
  console.log(`Question: ${question}`);

  const answer = readlineSync.question('Your answer:');

  if (answer === 'yes') {
    if (isEven(question)) {
      console.log('Correct!');
      i += 1;
    } else if (!isEven(question)) {
      console.log(
        `'yes' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${userName}!`,
      );
      break;
    }
  }

  if (answer === 'no') {
    if (!isEven(question)) {
      console.log('Correct!');
      i += 1;
    } else if (isEven(question)) {
      console.log(
        `'no' is wrong answer ;(. Correct answer was 'yes'. \n Let's try again, ${userName}!`,
      );
      break;
    }
  }

  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
} while (i < 3);
