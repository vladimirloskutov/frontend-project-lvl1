import promptly from 'promptly';

export default async () => {
  const name = await promptly.prompt('Name: ');
  console.log(`Hello, ${name}!`);
};
