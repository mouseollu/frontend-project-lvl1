import readlineSync from "readline-sync";

export const question = () => {
  var userName = readlineSync.question("May I have your name? ");
  console.log("Hello " + userName + "!");
};


