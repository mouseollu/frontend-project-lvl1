const getRandomNumber = (numberMin = 1, numberMax = 20) => {
  const random = Math.random() * (numberMax - numberMin) + numberMin;
  return Math.floor(random);
};

export default getRandomNumber;
