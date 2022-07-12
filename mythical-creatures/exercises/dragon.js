class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.amountEat = 0;
  }
  greet() {
    return `Hi, ${this.rider}!`;
  }
  eat() {
    this.amountEat = this.amountEat + 1;

    if (this.amountEat === 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
