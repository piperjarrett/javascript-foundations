class Werewolf {
  constructor(name) {
    this.name = name;
    this.form = "human";
    this.hungry = false;
  }
  completeTransformation() {
    this.hungry = !this.hungry;
    if (this.form === "human") {
      this.form = "wolf";

      return `Aaa-Woooo!`;
    } else {
      this.form = "human";

      return `Where are I?`;
    }
  }
  eatVictim(victim) {
    if (this.form === "wolf") {
      victim.alive = false;
      this.form = "human";
      return `Yum, ${victim.name} was delicious.`;
    } else {
      return `No way am I eating ${victim.name}, I'd like a burger!`;
    }
  }
}

module.exports = Werewolf;
