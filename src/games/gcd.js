import runGame from '../index.js';
import { getRandomNumber } from '../utilities.js';

const gcd = (number1, number2) => {
  if (number2 === 0) {
    return Math.abs(number1);
  }

  return gcd(number2, number1 % number2);
};

const getGameData = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = gcd(firstNumber, secondNumber);

  return [question, String(correctAnswer)];
};

const description = 'Find the greatest common divisor of given numbers.';

const run = () => runGame(description, getGameData);

export default run;
