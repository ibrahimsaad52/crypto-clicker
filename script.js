let coins = 0;
let clickPower = 1;
let upgrades = [
  { name: "Iron Finger", cost: 50, power: 2 },
  { name: "Golden Touch", cost: 200, power: 5 },
  { name: "Quantum Clicker", cost: 1000, power: 10 }
];

let achievements = [
  { name: "First Click!", condition: () => coins >= 1, unlocked: false },
  { name: "Wealthy!", condition: () => coins >= 500, unlocked: false }
];

const coinDisplay = document.getElementById("coin-display");
const clickButton = document.getElementById("click-button");
const upgradesDiv = document.getElementById("upgrades");

clickButton.addEventListener("click", () => {
  coins += clickPower;
  updateDisplay();
  checkAchievements();
});

function updateDisplay() {
  coinDisplay.textContent = `Coins: ${coins}`;
}

function renderUpgrades() {
  upgradesDiv.innerHTML = "<h2>Upgrades</h2>";
  upgrades.forEach((upgrade, index) => {
    const btn = document.createElement("button");
    btn.textContent = `${upgrade.name} (+${upgrade.power}) - ${upgrade.cost} coins`;
    btn.onclick = () => buyUpgrade(index);
    upgradesDiv.appendChild(btn);
  });
}

function buyUpgrade(index) {
  const upgrade = upgrades[index];
  if (coins >= upgrade.cost) {
    coins -= upgrade.cost;
    clickPower += upgrade.power;
    updateDisplay();
  }
}

function checkAchievements() {
  achievements.forEach(ach => {
    if (!ach.unlocked && ach.condition()) {
      ach.unlocked = true;
      alert(`🏆 Achievement Unlocked: ${ach.name}`);
    }
  });
}

renderUpgrades();
