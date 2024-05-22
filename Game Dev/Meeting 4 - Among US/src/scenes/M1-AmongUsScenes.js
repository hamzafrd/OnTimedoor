import Phaser from "../lib/phaser.js";

export default class AmongUsScene extends Phaser.Scene {
  constructor() {
    super("among-us-scene");
  }

  preload() {
    this.load.image("maps", "/public/images/Maps.png");
    this.load.image("playerRed", "/public/images/Red.png");
    this.load.image("p2Pink", "/public/images/Pink.png");
    this.load.image("p3Orange", "/public/images/Orange.png");
    this.load.image("p4Cyan", "/public/images/Cyan.png");
    this.load.image("p5Green", "/public/images/Green.png");
  }

  create() {
    this.add.image(500, 273.5, "maps").setScale(0.5);
    this.add.image(540, 200, "playerRed").setScale(0.5);
    this.add.image(200, 190, "p2Pink").setScale(0.5);
    this.add.image(200, 435, "p3Orange").setScale(0.3);
    this.add.image(500, 475, "p4Cyan").setScale(0.2);
    this.add.image(1000, 300, "p5Green").setScale(0.2);
    this.add.image(680, 250, "trex").setScale(0.2);
    this.add.image(950, 500, "lebron").setScale(0.2);
    this.add.image(380, 245, "messi").setScale(0.05);
    this.add.image(100, 290, "ronaldo").setScale(0.08);
  }
}
