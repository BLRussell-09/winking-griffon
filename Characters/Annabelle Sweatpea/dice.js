function roll (sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function rollDatDice(sides, target) {
  document.getElementById(target).value = roll(sides);
};
