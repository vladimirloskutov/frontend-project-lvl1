import greeting from './cli.js';
import promptly from 'promptly';

const roundsNumber = 3;

export default async (description, getGameData) => {
  const name = await greeting();
  console.log(description);

  for (let i = 1; i <= roundsNumber; i += 1) {
    const [question, correctAnswer] = getGameData();

    console.log(`Question: ${question}`);
    const answer = await promptly.prompt('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
