import Phaser from "./lib/phaser.js";
// import Game from "./scenes/HelloWorldScenes.js";
import AmongUsScreens from "./scenes/AmongUsScreens.js";

export default new Phaser.Game({
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: [AmongUsScreens],
  scale: {
    mode: Phaser.Scale.FIT,
    // autoCenter: Phaser.Scale.CENTER_BOTH,
  },
});
