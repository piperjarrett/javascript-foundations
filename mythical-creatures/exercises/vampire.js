class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = pet || "bat";
    this.thirsty = true;
    this.ouncesDrank = 0;
  }
  drink() {
    this.thirsty = false;
    this.ouncesDrank = this.ouncesDrank + 10;
    if (this.ouncesDrank > 50) {
      this.ouncesDrank = 50;
      return `I'm too full to drink anymore!`;
    }
  }
}

module.exports = Vampire;
