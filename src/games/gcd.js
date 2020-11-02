import runGame from '../index.js';

const gcd = (number1, number2) => {
  let firstNumber = number1;
  let secondNumber = number2;

  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
    } else {
      secondNumber -= firstNumber;
    }
  }

  return firstNumber;
};

const getGameData = () => {
  const firstNumber = Math.ceil(Math.random() * 10);
  const secondNumber = Math.ceil(Math.random() * 10);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = gcd(firstNumber, secondNumber);

  return [question, String(correctAnswer)];
};

const description = 'Find the greatest common divisor of given numbers.';

const run = () => runGame(description, getGameData);

export default run;
