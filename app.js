const p1 = {
	score: 0,
	button: document.getElementById("btnP1"),
	display: document.getElementById("scoreP1"),
};

const p2 = {
	score: 0,
	button: document.getElementById("btnP2"),
	display: document.getElementById("scoreP2"),
};

const btnReset = document.getElementById("btnReset");
const playTo = document.getElementById("playTo");
let winScore = 5;
let isGameOver = false;

function updateScore(player, opponent) {
	if (!isGameOver) {
		player.score++;
		if (player.score === winScore) {
			isGameOver = true;
			player.display.classList.add("has-text-success");
			opponent.display.classList.add("has-text-danger");
			player.button.disabled = true;
			opponent.button.disabled = true;
		}
		player.display.textContent = player.score;
	}
}

p1.button.addEventListener("click", () => {
	updateScore(p1, p2);
});
p2.button.addEventListener("click", () => {
	updateScore(p2, p1);
});

playTo.addEventListener("change", () => {
	winScore = parseInt(playTo.value);
	reset();
});
btnReset.addEventListener("click", reset);

function reset() {
	isGameOver = false;
	for (let p of [p1, p2]) {
		p.score = 0;
		p.display.textContent = 0;
		p.display.classList.remove("has-text-success", "has-text-danger");
		p.button.disabled = false;
	}
}
