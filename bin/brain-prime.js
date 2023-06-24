#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name?');
console.log(`Hello, ${userName}`);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
let i = 0;
do {
  const question = Math.floor(Math.random() * 100);
  console.log(`Question: ${question}`);

  const answer = readlineSync.question('Your answer:');

  if (answer === 'yes') {
    if (isPrime(question)) {
      console.log('Correct!');
      i += 1;
    } else if (!isPrime(question)) {
      console.log(
        `'yes' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${userName}!`,
      );
      break;
    }
  }

  if (answer === 'no') {
    if (!isPrime(question)) {
      console.log('Correct!');
      i += 1;
    } else if (isPrime(question)) {
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
