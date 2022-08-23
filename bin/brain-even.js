#!/usr/bin/env node

import readlineSync from "readline-sync";

// Нахождение случайного числа

const randomNumber = () => {
  let numberMin = 1;
  let numberMax = 20;
  const random = Math.random() * (numberMax - numberMin) + numberMin;
  return Math.floor(random);
};

const isEvenNumber = (num) => num % 2 === 0;

const roundsCount = 3;

const playGame = () => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log("Hello, " + userName + "!");

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswerCounter = 0;

  while (correctAnswerCounter < roundsCount) {
    const number = randomNumber();
    console.log("Question: " + number);
    const correctAnswer = isEvenNumber(number) ? "yes" : "no";
    const userAnswer = readlineSync.question("Your answer: ");

    if (correctAnswer === userAnswer) {
      console.log("Correct!");
      correctAnswerCounter += 1;
    } else {
      console.log(
        userAnswer + " is wrong answer ;(. Correct answer was " + correctAnswer
      );
      console.log("Let's try again, " + userName);
      return;
    }
  }
  console.log("Congratulations, " + userName);
};

playGame();
