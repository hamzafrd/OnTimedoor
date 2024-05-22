import Phaser from "phaser";

import CollectingStarsScenes from "./scenes/CollectingStarsScenes";

const config = {
  type: Phaser.AUTO,
  parent: "app",
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [CollectingStarsScenes],
};

export default new Phaser.Game(config);
