import runGame from '../index.js';

const gcd = (number1, number2) => {
  const smallerNumber = number1 < number2 ? number1 : number2;

  for (let divisor = smallerNumber; divisor > 0; divisor -= 1) {
    const remainder1 = number1 % divisor;
    const remainder2 = number2 % divisor;
    if (remainder1 === 0 && remainder2 === 0) {
      return divisor;
    }
  }

  return false;
  // если этот return убрать, линтер выдаст consistent-return
  // уместен ли этот return?
  // как в этом случае правильно сделать?
};

const description = 'Find the greatest common divisor of given numbers.';

const run = async () => {
  const getGameData = () => {
    const firstNumber = Math.ceil(Math.random() * 10);
    const secondNumber = Math.ceil(Math.random() * 10);

    const question = `${firstNumber} ${secondNumber}`;
    const correctAnswer = gcd(firstNumber, secondNumber);

    return [question, String(correctAnswer)];
  };

  return runGame(description, getGameData);
};

export default run;
