class Centaur {
  constructor(details) {
    this.name = details.name;
    this.breed = details.type;
    this.cranky = false;
    this.standing = true;
    this.counter = 0;
    this.layingDown = false;
  }
  shootBow() {
    this.counter++;
    if (this.counter >= 3 || this.standing === false) {
      this.cranky = true;
      return `NO!`;
    } else {
      return `Twang!!!`;
    }
  }
  run() {
    this.counter++;

    if (this.counter >= 3 || this.standing === false) {
      this.cranky = true;
      return `NO!`;
    }
    return `Clop clop clop clop!!!`;
  }
  sleep() {
    if (this.layingDown === true) {
      this.cranky = false;
      return `ZZZZ`;
    } else {
      return `NO!`;
    }
  }
  layDown() {
    this.standing = !this.standing;
    this.layingDown = !this.layingDown;
  }
  standUp() {
    this.counter--;
    this.counter--;
    this.standing = !this.standing;
    this.layingDown = !this.layingDown;
  }
  drinkPotion() {
    this.cranky = false;
    if (this.standing === false) {
      return `Not while I'm laying down!`;
    }
  }
}
module.exports = Centaur;
