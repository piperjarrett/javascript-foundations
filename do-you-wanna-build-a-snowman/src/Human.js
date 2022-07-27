var Snowman = require("./Snowman");

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0,
    };
  }
  gatherMaterials(materialName, quantity) {
    if (materialName === "carrots") {
      this.materials.carrots = this.materials.carrots + quantity;
    }
    if (materialName === "buttons") {
      this.materials.buttons = this.materials.buttons + quantity;
    }
    if (materialName === "coal") {
      this.materials.coal = this.materials.coal + quantity;
    }
    if (materialName === "snowballs") {
      this.materials.snowballs = this.materials.snowballs + quantity;
    }
  }
  buildASnowman() {
    return new Snowman(this.materials);
  }

  placeMagicHat() {
    console.log(this.magicHat);
    if (this.materials.coal > 2) {
      return `Woah, this snowman is coming to life!`;
    } else {
      return `I guess I didn't build it correctly.`;
    }
  }
}

module.exports = Human;
