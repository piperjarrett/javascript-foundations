class Snack {
  constructor(snack) {
    this.deliciousLevel = "extra";
    this.type = snack;
    this.amount = 100;
    this.isInLunchBox = false;
    this.cuttingItClose = false;
  }
  getEaten() {
    this.amount -= 10;
    if (this.amount < 30) {
      this.cuttingItClose = true;
    }
  }
  checkForHealthy() {
    if (this.type.toLowerCase().includes("fruit")) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Snack;
