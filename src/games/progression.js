import runGame from '../index.js';

const getProgression = () => {
  const progressionLength = 10;
  const progressionStart = Math.floor(Math.random() * 10);
  const progressionStep = Math.ceil(Math.random() * 10);
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progressionStart + progressionStep * i);
  }

  return progression;
};

const run = async () => {
  const description = 'What number is missing in the progression?';

  const getGameData = () => {
    const progression = getProgression();

    const secretElementIndex = Math.floor(Math.random() * progression.length);
    const correctAnswer = progression[secretElementIndex];
    progression[secretElementIndex] = '..';
    const question = progression.join(' ');

    return [question, String(correctAnswer)];
  };

  return runGame(description, getGameData);
};

export default run;
