import Phaser from "../lib/phaser.js";

export default class AmongUsScreens extends Phaser.Scene {
  constructor() {
    super("among-us");
  }

  preload() {
    this.load.image("map", "/public/images/Maps.png");
    this.load.image("pRed", "/public/images/Red.png");
  }

  create() {
    this.add.image(960, 540, "map");
    this.add.image(980, 375, "pRed").setScale(2);
  }
}
