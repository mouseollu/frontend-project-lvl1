import getRandomNumber from "../randomNumber.js";
import playGame from "../index.js";

const exercise = "What is the result of the expression?";

const symbols = ["+", "-", "*"];

const correctAnswer = (number1, number2, operation) => {
  let answer;
  switch (operation) {
    case "+":
      answer = number1 + number2;
      break;
    case "-":
      answer = number1 - number2;
      break;
    case "*":
      answer = number1 * number2;
      break;
    default:
      break;
  }
  return answer;
};

const getSolutionOfExercise = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const symbol = symbols[getRandomNumber(0, symbols.length)];
  const number = number1 + symbol + number2;
  const answer = correctAnswer(number1, number2, symbol);
  return [number, String(answer)];
};

const playGameCalc = () => {
  playGame(exercise, getSolutionOfExercise);
};

export default playGameCalc;
