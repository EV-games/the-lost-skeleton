import 'phaser';
import { Boot } from './scene/Boot';
import { Preload } from './scene/Preload';
import { Level1 } from './scene/Level1';
import { Level2 } from './scene/Level2';

class GameApp extends Phaser.Game {
    public static gameConfig: Phaser.Types.Core.GameConfig = null;

    constructor(config: Phaser.Types.Core.GameConfig) {
        GameApp.gameConfig = {
            type: Phaser.AUTO,
            parent: "content",
            backgroundColor: '#eee',
            width: 1600,
            height: 940,
            physics: {
                default: "arcade",
                arcade: {
                    debug: true,
                    gravity: {y: 200}
                }
            },
            scene: [Boot, Preload, Level1, Level2]
        };

        super(GameApp.gameConfig);
    }
}

export { GameApp }

new GameApp(null);
