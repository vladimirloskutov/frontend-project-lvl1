import promptly from 'promptly';
import greeting from './cli.js';

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

const run = async () => {
  const name = await greeting();

  console.log('What is the result of the expression?');

  const operations = ['+', '-', '*'];
  const roundsCount = 3;
  for (let i = 1; i <= roundsCount; i += 1) {
    const firstNumber = Math.floor(Math.random() * 10);
    const secondNumber = Math.floor(Math.random() * 10);
    const operation = operations[Math.floor(Math.random() * operations.length)];

    const question = `${firstNumber} ${operation} ${secondNumber}`;
    console.log(`Question: ${question}`);

    const correctAnswer = calc(firstNumber, secondNumber, operation);
    const answer = await promptly.prompt('Your answer: ');

    if (Number(answer) !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default run;
