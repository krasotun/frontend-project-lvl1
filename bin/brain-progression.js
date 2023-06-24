#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name?');
console.log(`Hello, ${userName}\nWhat number is missing in the progression?`);

let i = 0;

do {
  const progression = [];
  let value = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 3) + 1;

  for (let j = 0; j <= 10; j += 1) {
    progression.push(value);

    value += step;
  }

  const hiddenValueIndex = Math.floor(Math.random() * 9);
  const savedValue = progression[hiddenValueIndex];
  progression[hiddenValueIndex] = '..';

  console.log(`Question: ${progression}`);
  const result = +readlineSync.question('Your answer:');

  if (+result === savedValue) {
    console.log('Correct!');
    i += 1;
  } else {
    console.log(
      `'${result}' is wrong answer ;(. Correct answer was '${savedValue}' \nLet's try again, ${userName}!`,
    );
    break;
  }

  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
} while (i < 3);
