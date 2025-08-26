let coins = 0;
let clickPower = 1;

const coinDisplay = document.getElementById("coin-display");
const clickButton = document.getElementById("click-button");

clickButton.addEventListener("click", () => {
  coins += clickPower;
  updateDisplay();
});

function updateDisplay() {
  coinDisplay.textContent = `Coins: ${coins}`;
}
