console.log("************** DELIVERABLE 05 **************");
console.log("** 5. Slot Machine **");

const getRandomBool = (): boolean => {
	return Math.random() >= 0.5;
}

class SlotMachine {
	coins: number;

	constructor() {
		this.coins = 0;
	}

	play(): void {
		this.coins++;
		const result = [getRandomBool(), getRandomBool(), getRandomBool()];
		if (result[0] && result[1] && result[2]) {
			console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
			this.coins = 0;
		} else {
			console.log(`Good luck next time!! Theres a prize of ${this.coins} coins waiting for you.`);
		}
	}
}

const machine1 = new SlotMachine();
console.log("SIMULATING 10 SLOTS SPINS!")
for (let i = 0; i < 10; i++) {
	machine1.play();
}
