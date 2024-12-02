class Cena1 extends Phaser.Scene {
    constructor() {
        super({ key: 'Cena1' });
    }

    preload() {
        this.load.image('bgC1', '/phaser-3.86.0/src/img/conteudo/Background/back2.png');
        this.load.image('bPF', '/phaser-3.86.0/src/img/conteudo/BOTÃO/professor.png');
    }

    create() {
        // Adiciona o fundo da cena
        this.add.image(480, 480, 'bgC1');

        // Adiciona o "botão" do professor no centro horizontal e ajusta a posição vertical conforme necessário
        const professorButton = this.add.image(470, 400, 'bPF').setInteractive();
        professorButton.setScale(0.3); // Ajusta o tamanho do botão para 30% do original

        // Adiciona um texto explicativo acima do botão, centralizado horizontalmente
        this.add.text(400, 150, 'Escolha sua profissão:', { fontSize: '32px', color: '#ffffff' }).setOrigin(0.5);

        // Configurações de animação para o efeito de botão
        professorButton.on('pointerover', () => {
            professorButton.setScale(0.28); // Diminui um pouco ao passar o mouse
        });

        professorButton.on('pointerout', () => {
            professorButton.setScale(0.3); // Volta ao tamanho normal ao tirar o mouse
        });

        professorButton.on('pointerdown', () => {
            professorButton.setScale(0.27); // Afunda mais ao clicar
        });

        professorButton.on('pointerup', () => {
            professorButton.setScale(0.3);
            // Exemplo de ação para quando o botão é clicado
            this.scene.start('CenaPF');
        });
    }
}
