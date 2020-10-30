import promptly from 'promptly';

export default async () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');

  const name = await promptly.prompt('Name: ');
  console.log(`Hello, ${name}!\n`);

  return name;
};
