console.log("************** DELIVERABLE 05 **************");
console.log("** 5. Slot Machine **");
function getRandomBool() {
    return Math.random() >= 0.5;
}
var SlotMachine = /** @class */ (function () {
    function SlotMachine() {
        this.coins = 0;
    }
    SlotMachine.prototype.play = function () {
        this.coins++;
        var result = [getRandomBool(), getRandomBool(), getRandomBool()];
        if (result[0] && result[1] && result[2]) {
            console.log("Congratulations!!!. You won ".concat(this.coins, " coins!!"));
            this.coins = 0;
        }
        else {
            console.log("Good luck next time!! Theres a prize of ".concat(this.coins, " coins waiting for you."));
        }
    };
    return SlotMachine;
}());
var machine1 = new SlotMachine();
console.log("SIMULATING 10 SLOTS SPINS!");
for (var i = 0; i < 10; i++) {
    machine1.play();
}
