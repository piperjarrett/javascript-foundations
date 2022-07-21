var Person = require("./person");
var Statue = require("./statue");
class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim) {
    var newStatue = new Statue(victim.name);
    if (this.statues.length < 3) {
      this.statues.push(newStatue);
    } else {
      var releasePerson = new Person(this.statues[0].name);
      this.statues.shift();
      this.statues.push(newStatue);
      releasePerson.mood = "relieved";
      return releasePerson;
    }
  }
}

module.exports = Medusa;
