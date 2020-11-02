import runGame from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utilities.js';

const getProgression = (progressionStart, progressionStep) => {
  const progressionLength = 10;
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progressionStart + progressionStep * i);
  }

  return progression;
};

const getGameData = () => {
  const progressionStart = getRandomNumber();
  const progressionStep = getRandomNumber();
  const progression = getProgression(progressionStart, progressionStep);

  const secretElementIndex = getRandomIndex(progression);
  const correctAnswer = progression[secretElementIndex];
  progression[secretElementIndex] = '..';
  const question = progression.join(' ');

  return [question, String(correctAnswer)];
};

const description = 'What number is missing in the progression?';

const run = () => runGame(description, getGameData);

export default run;
