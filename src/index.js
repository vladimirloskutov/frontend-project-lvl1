import promptly from 'promptly';

const roundsCount = 3;

export default async (description, getGameData) => {
  console.log('Welcome to the Brain Games!');

  console.log('May I have your name?');
  const name = await promptly.prompt('Name: ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  for (let i = 1; i <= roundsCount; i += 1) {
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
