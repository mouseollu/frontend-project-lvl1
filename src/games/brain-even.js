import getRandomNumber from "../randomNumber.js";
import playGame from "../index.js";

const exercise = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (num) => num % 2 === 0;

const getSolutionOfExercise = () => {
  const number = getRandomNumber();

  const correctAnswer = isEvenNumber(number) ? "yes" : "no";
  return [number, correctAnswer];
};

const playGameEven = () => {
  playGame(exercise, getSolutionOfExercise);
};

export default playGameEven;
