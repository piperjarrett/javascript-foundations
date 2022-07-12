class Unicorn {
  constructor(name, color = "white") {
    this.name = name;
    this.color = color;
  }
  isWhite() {
    return false;
  }
  says(sparkly) {
    return `**;* ${sparkly} *;**`;
  }
}

module.exports = Unicorn;
