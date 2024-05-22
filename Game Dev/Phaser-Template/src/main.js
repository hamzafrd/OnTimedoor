import Phaser from "./lib/phaser.js";
import Game from "./scenes/HelloWorldScenes.js";
export default new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: [Game],
  scale: {
    mode: Phaser.Scale.FIT,
  },
});
