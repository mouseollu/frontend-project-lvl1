import getRandomNumber from "../randomNumber.js";
import playGame from "../index.js";

const exercise = "Find the greatest common divisor of given numbers.";

const correctAnswer = (number1, number2) => {
  if (number2 > number1) return correctAnswer(number2, number1);
  if (!number2) return number1;
  return correctAnswer(number2, number1 % number2);
};

const getSolutionOfExercise = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const number = `${number1} ${number2}`;
  const answer = correctAnswer(number1, number2);
  return [number, String(answer)];
};

const playGameGcd = () => {
  playGame(exercise, getSolutionOfExercise);
};

export default playGameGcd;

// function NOD(number1, number2) {
//   if (number2 > number1) return NOD(number2, number1);
//   if (!number2) return number1;
//   return NOD(number2, number1 % number2);
// }
// console.log(NOD(4, 9));
