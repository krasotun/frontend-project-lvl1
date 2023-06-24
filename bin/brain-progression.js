#!/usr/bin/env node

console.log('Brain progression is here');

const progression = [];

let value = Math.floor(Math.random() * 10);
const step = Math.floor(Math.random() * 3) + 1;

for (let i = 0; i < 10; i += 1) {
  progression.push(value);

  value += step;
}

const hiddenValueIndex = Math.floor(Math.random() * 9);
const savedValue = progression[hiddenValueIndex];
progression[hiddenValueIndex] = '..';
