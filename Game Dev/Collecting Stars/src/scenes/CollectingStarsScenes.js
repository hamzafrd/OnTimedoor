import Phaser from "phaser";

export default class CollectingStarsScenes extends Phaser.Scene {
  constructor() {
    super("collecting-stars");
  }

  init() {
    this.platform = undefined;
    this.player = undefined;
    this.stars = undefined;
  }

  preload() {
    this.load.image("bomb", "/public/images/bomb.png");
    this.load.image("sky", "/public/images/sky.png");
    this.load.image("star", "/public/images/star.png");
    this.load.image("ground", "/public/images/platform.png");

    this.load.spritesheet("dude", "/public/images/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    this.add.image(400, 300, "sky");

    this.platform = this.physics.add.staticGroup();
    this.platform.create(600, 400, "ground");
    this.platform.create(50, 250, "ground");
    this.platform.create(750, 220, "ground");
    this.platform.create(-100, 120, "ground");

    this.platform.create(400, 580, "ground").setScale(2).refreshBody();

    this.player = this.physics.add.sprite(100, 450, "dude");
    this.player.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, this.platform);

    this.stars = this.physics.add.group({
      key: "star",
      repeat: 10,
      setXY: { x: 50, y: 0, stepX: 70 },
    });

    this.physics.add.collider(this.stars, this.platform);

    this.stars.children.iterate(function (child) {
      // @ts-ignore
      child.setBounceY(0.5);
    });
  }

  update() {}
}
