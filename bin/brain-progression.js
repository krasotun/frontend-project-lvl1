#!/usr/bin/env node

console.log('Brain progression id here');

const progression = [];

for (let i = 0; i < 10; i += 1) {
  progression.push(Math.floor(Math.random() * 10));
}

console.log('before', progression);

const hiddenValueIndex = Math.floor(Math.random() * 9);

const savedValue = progression[hiddenValueIndex];

progression[hiddenValueIndex] = '..';

console.log('after', progression);

console.log(savedValue);
