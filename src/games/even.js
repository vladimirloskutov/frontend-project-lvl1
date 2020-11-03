import runGame from '../index.js';
import getRandomNumber from '../utilities.js';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, String(correctAnswer)];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const run = () => runGame(description, getGameData);

export default run;
