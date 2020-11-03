import runGame from '../index.js';
import getRandomNumber from '../utilities.js';

const calc = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
};

const operations = ['+', '-', '*'];

const getGameData = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const operation = operations[getRandomNumber(0, operations.length)];

  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const correctAnswer = calc(firstNumber, secondNumber, operation);

  return [question, String(correctAnswer)];
};

const description = 'What is the result of the expression?';

const run = () => runGame(description, getGameData);

export default run;
