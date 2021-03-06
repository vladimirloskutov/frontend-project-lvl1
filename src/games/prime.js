import runGame from '../index.js';
import getRandomFromRange from '../utilities.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getGameData = () => {
  const question = getRandomFromRange(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, String(correctAnswer)];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const run = () => runGame(description, getGameData);

export default run;
