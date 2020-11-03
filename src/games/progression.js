import runGame from '../index.js';
import getRandomFromRange from '../utilities.js';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const progressionLength = 10;

const getGameData = () => {
  const progressionStart = getRandomFromRange(1, 100);
  const progressionStep = getRandomFromRange(1, 100);
  const progression = getProgression(progressionStart, progressionStep, progressionLength);

  const secretElementIndex = getRandomFromRange(0, progression.length);
  const correctAnswer = progression[secretElementIndex];
  progression[secretElementIndex] = '..';
  const question = progression.join(' ');

  return [question, String(correctAnswer)];
};

const description = 'What number is missing in the progression?';

const run = () => runGame(description, getGameData);

export default run;
