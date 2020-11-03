import runGame from '../index.js';
import getRandomFromRange from '../utilities.js';

const gcd = (number1, number2) => {
  if (number2 === 0) {
    return Math.abs(number1);
  }

  return gcd(number2, number1 % number2);
};

const getGameData = () => {
  const firstNumber = getRandomFromRange(1, 100);
  const secondNumber = getRandomFromRange(1, 100);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = gcd(firstNumber, secondNumber);

  return [question, String(correctAnswer)];
};

const description = 'Find the greatest common divisor of given numbers.';

const run = () => runGame(description, getGameData);

export default run;
