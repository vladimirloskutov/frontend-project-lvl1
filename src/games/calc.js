import runGame from '../index.js';

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
  const firstNumber = Math.floor(Math.random() * 10);
  const secondNumber = Math.floor(Math.random() * 10);
  const operation = operations[Math.floor(Math.random() * operations.length)];

  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const correctAnswer = calc(firstNumber, secondNumber, operation);

  return [question, String(correctAnswer)];
};

const description = 'What is the result of the expression?';

const run = () => runGame(description, getGameData);

export default run;
