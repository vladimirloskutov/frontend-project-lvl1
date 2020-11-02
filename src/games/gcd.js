import runGame from '../index.js';
import { getRandomNumber } from '../utilities.js';

const gcd = (number1, number2) => {
  const divisor = number2 === 0 ? Math.abs(number1) : gcd(number2, number1 % number2);

  return divisor;
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
