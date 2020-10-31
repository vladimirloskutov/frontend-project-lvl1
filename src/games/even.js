import promptly from 'promptly';
import greeting from '../cli.js';

const isEven = (number) => number % 2 === 0;

const run = async () => {
  const name = await greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundsCount = 3;
  for (let i = 1; i <= roundsCount; i += 1) {
    const question = Math.floor(Math.random() * 100);
    console.log(`Question: ${question}`);

    const correctAnswer = isEven(question) ? 'yes' : 'no';
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

export default run;
