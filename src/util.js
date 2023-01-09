function randomColor() {
  const maxVal = 0xffffff; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  const randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}

export { randomColor };
