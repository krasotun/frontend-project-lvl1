#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name?');
console.log(`Hello, ${userName}`);

const actionsArray = ['+', '-', '*'];

let i = 0;

do {
  const action = actionsArray[Math.floor(Math.random() * 3)];
  const first = Math.floor(Math.random() * 10);
  const second = Math.floor(Math.random() * 10);

  console.log(
    `What is the result of the expression? \nQuestion: ${first} ${action} ${second}`,
  );

  if (action === '+') {
    const result = +readlineSync.question('Your answer:');
    const sum = first + second;
    if (result === sum) {
      console.log('Correct!');
      i += 1;
    } else if (result !== sum) {
      console.log(
        `'${result}' is wrong answer ;(. Correct answer was '${sum}' \nLet's try again, ${userName}!`,
      );
      break;
    }
  }

  if (action === '-') {
    const result = +readlineSync.question('Your answer:');
    const diff = first - second;
    if (result === diff) {
      console.log('Correct!');
      i += 1;
    } else if (result !== diff) {
      console.log(
        `'${result}' is wrong answer ;(. Correct answer was '${diff}' \nLet's try again, ${userName}!`,
      );
      break;
    }
  }
  if (action === '*') {
    const result = +readlineSync.question('Your answer:');
    const prod = first * second;
    if (result === prod) {
      console.log('Correct!');
      i += 1;
    } else if (result !== prod) {
      console.log(
        `'${result}' is wrong answer ;(. Correct answer was '${prod}' \nLet's try again, ${userName}!`,
      );
      break;
    }
  }

  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
} while (i < 3);
