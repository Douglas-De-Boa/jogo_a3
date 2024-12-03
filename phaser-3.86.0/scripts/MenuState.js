class MenuState extends Phaser.Scene {
    constructor() {
        super({ key: "menuState" });
    }

    preload() {
        this.load.image("bg", "./assets/img/conteudo/Background/back1.png");
        this.load.image(
            "playButton",
            "./assets/img/conteudo/BOTÃO/BOTÃO_PLAY.png"
        );
    }

    create() {
        // Adiciona o fundo da tela
        this.add.image(480, 480, "bg");

        // Cria o botão de jogar
        const playButton = this.add
            .image(470, 400, "playButton")
            .setInteractive();
        playButton.setScale(0.5);

        // Animações para o botão ao passar o mouse e clicar
        playButton.on("pointerover", () => {
            playButton.setScale(0.45); // Diminui o botão ao passar o mouse
        });

        playButton.on("pointerout", () => {
            playButton.setScale(0.3); // Volta ao tamanho normal ao sair o mouse
        });

        playButton.on("pointerdown", () => {
            playButton.setScale(0.3); // Afunda mais o botão ao clicar
        });

        playButton.on("pointerup", () => {
            playButton.setScale(0.3); // Volta ao tamanho normal ao soltar o botão
            this.scene.start("Cena1"); // Vai para a próxima cena
        });

        // Adiciona a opção de iniciar a cena ao pressionar a tecla ENTER
        this.input.keyboard.on("keydown-ENTER", () => {
            this.scene.start("Cena1");
        });
    }
}
