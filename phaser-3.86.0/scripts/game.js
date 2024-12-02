const config = {
    type: Phaser.AUTO,
    width: 960,
    height: 960,
    scene: [MenuState, Cena1, CenaPF,Cena2],  // Lista de cenas a serem carregadas
    scale: {
        mode: Phaser.Scale.FIT,  // Faz o jogo se ajustar na tela
        autoCenter: Phaser.Scale.CENTER_BOTH  // Centraliza a tela
    },
    physics: {
        default: 'arcade',  // Configuração do sistema de física arcade
        arcade: {
            gravity: { y: 0 },  // Define a gravidade como 0 (sem queda)
            debug: false  // Não mostra o modo de depuração
        }
    }
    
};
const game = new Phaser.Game(config);