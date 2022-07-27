var Skier = require("./Skier");

class Lift {
  constructor(people) {
    this.inService = true;
    this.limit = people;
    this.skiers = [];
    this.safetyBar = "up";
  }
  admitSkier(name, hasLiftTicket) {
    if (hasLiftTicket === false) {
      return `Sorry, ${name}. You need a lift ticket!`;
    }
    if (this.skiers.length < this.limit) {
      this.skiers.push(new Skier(name));
    } else {
      return `Sorry, ${name}. Please wait for the next lift!`;
    }
  }
  startLift() {
    if (this.skiers.length === this.limit) {
      this.safetyBar = "down";
    }
    if (this.skiers.length < this.limit) {
      this.safetybar;
      var amountOfPeople = this.limit - this.skiers.length;
      if (amountOfPeople > 1) {
        return `We still need ${amountOfPeople} more skiers!`;
      } else {
        return `We still need ${amountOfPeople} more skier!`;
      }
    }
  }
}
module.exports = Lift;
