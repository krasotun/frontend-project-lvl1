#!/usr/bin/env node
import readlineSync from 'readline-sync';

const gcd = (a, b) => {
  let first = a;
  let second = b;
  let temp;

  while (second !== 0) {
    temp = second;
    second = first % second;
    first = temp;
  }

  return first;
};

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name?');
console.log(
  `Hello, ${userName}\nFind the greatest common divisor of given numbers.`,
);

let i = 0;

do {
  const first = Math.floor(Math.random() * 10);
  const second = Math.floor(Math.random() * 10);
  console.log(`Question: ${first} ${second}`);
  const result = +readlineSync.question('Your answer:');

  if (+result === gcd(first, second)) {
    console.log('Correct!');
    i += 1;
  } else {
    console.log(
      `'${result}' is wrong answer ;(. Correct answer was '${gcd(
        first,
        second,
      )}' \nLet's try again, ${userName}!`,
    );
    break;
  }

  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
} while (i < 3);
