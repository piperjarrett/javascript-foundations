class Skier {
  constructor(name) {
    this.name = name;
    this.hasLiftTicket = true;
    this.skillLevel = 1;
    this.nextSlope = "green circle";
  }
  takeLesson() {
    this.skillLevel++;
  }
  pickSlope() {
    if (this.skillLevel > 2) {
      this.nextSlope = "blue square";
    }
    if (this.skillLevel > 4) {
      this.nextSlope = "black diamond";
    }
  }
}

module.exports = Skier;
