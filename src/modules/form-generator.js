const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generatorCapitalLetters = () => String.fromCharCode(rand(65, 91));
const generatorSmallLetters = () => String.fromCharCode(rand(97, 123));
const generatorNumbers = () => String.fromCharCode(rand(48, 58));
const generatorSymbols = () => {
  const symbols = ["@", "!", "#", "$", "%", "&", "*"];
  const number = rand(0, symbols.length);
  return symbols[number];
};

export function generatorPassword(amount, numbers, small, capital, symbols) {
  const passwordArray = [];
  amount = Number(amount);
  for (let i = 0; i < amount; i++) {
    capital && passwordArray.push(generatorCapitalLetters());
    small && passwordArray.push(generatorSmallLetters());
    numbers && passwordArray.push(generatorNumbers());
    symbols && passwordArray.push(generatorSymbols());
  }
  return passwordArray.join("").slice(0, amount);
}
