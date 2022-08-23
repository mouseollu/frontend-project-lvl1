import readlineSync from "readline-sync";

// Количество раундов
const roundsCount = 3;

const playGame = (exercise, getSolutionOfExercise) => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log("Hello, " + userName + "!");

  // Описание задания
  console.log(exercise);

  // Счетчик побед
  let correctAnswerCounter = 0;

  while (correctAnswerCounter < roundsCount) {
    const [number, correctAnswer] = getSolutionOfExercise();
    console.log("Question: " + number);
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

export default playGame;
