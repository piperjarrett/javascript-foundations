class Magician {
  constructor(details) {
    this.name = `The Great ${details.name}`;
    this.assistant = details.assistant;
    this.favoriteAccessory = details.clothing || "top hat";
    this.confidencePercentage = 10;
  }
  performIncantation(word) {
    return `${word.toUpperCase()}!`;
  }
  performTrick() {
    this.confidencePercentage += 10;
    if (this.favoriteAccessory === "top hat") {
      return `PULL RABBIT FROM TOP HAT`;
    } else {
      return `PULL DOVE FROM SLEEVE`;
    }
  }
  performShowStopper() {
    if (this.confidencePercentage >= 100 && this.assistant) {
      return `WOW! The magician totally just sawed that person in half!`;
    } else {
      return `Oh no, this trick is not ready!`;
    }
  }
}

module.exports = Magician;
