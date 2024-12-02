class Cena2 extends Phaser.Scene {
    constructor() {
        super({ key: "Cena2" });
        this.player = null;
        this.letras = null;
        this.timeLeft = 5;
        this.startTimer = 3; // Timer inicial
        this.timerText = null; // Para exibir o texto do timer
        this.gameStarted = false;
        this.carregandoLetra = null; // Letra que o jogador está carregando
        this.uiText = null; // Texto na interface inferior // Flag para indicar o início do jogo
    }

    preload() {
        this.load.image(
            "mostrarPalavras",
            "/phaser-3.86.0/src/img/conteudo/Background/navbarpalavras.png"
        );
        // Substitua pelo caminho real da imagem do botão
        this.load.image(
            "areaEntrega",
            "/phaser-3.86.0/src/img/conteudo/Background/caixapalavras.png"
        );
        this.load.image(
            "cao",
            "/phaser-3.86.0/src/img/conteudo/icones/cao.png"
        )
        this.load.image(
            "zebra",
            "/phaser-3.86.0/src/img/conteudo/icones/cao.png"
        )
        this.load.image(
            "botaoConfirmarVerde",
            "/phaser-3.86.0/src/img/conteudo/BOTÃO/palavraCerta.png"
        );
        this.load.image(
            "botaoReiniciar",
            "/phaser-3.86.0/src/img/conteudo/BOTÃO/BotaoReiniciar.png"
        );
        
        this.load.image(
            "botaoApagar1Letra",
            "/phaser-3.86.0/src/img/conteudo/BOTÃO/botaoApagar.png"
        );
        this.load.image(
            "botaoConfirmarVermelho",
            "/phaser-3.86.0/src/img/conteudo/BOTÃO/palavraErrada.png"
        );
        this.load.image(
            "A",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-AA2.png"
        );
        this.load.image(
            "B",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-bb.png"
        );
        this.load.image(
            "C",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-cc2.png"
        );
        this.load.image(
            "D",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-DD2.png"
        );
        this.load.image(
            "E",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-EE2.png"
        );
        this.load.image(
            "F",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-FF.png"
        );
        this.load.image(
            "G",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-GG2.png"
        );
        this.load.image(
            "H",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-HH2.png"
        );
        this.load.image(
            "I",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-II2.png"
        );
        this.load.image(
            "J",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-jj2.png"
        );
        this.load.image(
            "K",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-kk.png"
        );
        this.load.image(
            "L",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-ll.png"
        );
        this.load.image(
            "M",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-M.png"
        );
        this.load.image(
            "N",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-nn2.png"
        );
        this.load.image(
            "O",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-OO2.png"
        );
        this.load.image(
            "P",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-PP2.png"
        );
        this.load.image(
            "Q",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-QQ2.png"
        );
        this.load.image(
            "R",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-RR2.png"
        );
        this.load.image(
            "S",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-S.png"
        );
        this.load.image(
            "T",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-TT2.png"
        );
        this.load.image(
            "U",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-UU2.png"
        );
        this.load.image(
            "V",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-VV2.png"
        );
        this.load.image(
            "W",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-WW2.png"
        );
        this.load.image(
            "X",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-XX2.png"
        );
        this.load.image(
            "Y",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-YY2.png"
        );
        this.load.image(
            "Z",
            "/phaser-3.86.0/src/img/conteudo/LITRTAS22/LITRTAS22/Sprite-ZZ2.png"
        );
        this.load.image(
            "botaoplay",
            "/phaser-3.86.0/src/img/conteudo/BOTÃO/BOTÃO_PLAY.png"
        ); // Substitua pelo caminho real da imagem do botão
        this.load.tilemapTiledJSON(
            "mapa",
            "/phaser-3.86.0/map-professor-att.json"
        );
        this.load.image(
            "CFS1",
            "/phaser-3.86.0/assets/map_professor/Classroom_First_Spritesheet_1.png"
        );
        this.load.image(
            "AcabouTempo",
            "/phaser-3.86.0/src/img/conteudo/Background/acaboutempo.png"
        );
        this.load.image(
            "CFS6",
            "/phaser-3.86.0/assets/map_professor/Classroom_First_Spritesheet_6.png"
        );
        this.load.image(
            "CPFSc",
            "/phaser-3.86.0/assets/map_professor/Classroom_PropsFirst_Spritesheet-cop.png"
        );
        this.load.image(
            "CPSP4",
            "/phaser-3.86.0/assets/map_professor/ClassroomPropsSecondSpritesheet4.png"
        );
        this.load.image(
            "CSS7",
            "/phaser-3.86.0/assets/map_professor/ClassroomSecondSpritesheet7.png"
        );
        this.load.image(
            "CSSC",
            "/phaser-3.86.0/assets/map_professor/ClassroomSecond_Spritesheet-cop.png"
        );
        this.load.image(
            "POFS4",
            "/phaser-3.86.0/assets/map_professor/PrincipalOfficeSecondSpritesheet4.png"
        );
        this.load.image(
            "POSS4",
            "/phaser-3.86.0/assets/map_professor/strokespritesheet20125.png"
        );
        this.load.image(
            "WFD5",
            "/phaser-3.86.0/assets/map_professor/Wallfloordoorw_First_Spritesheet_5.png"
        );
        this.load.image(
            "SPS",
            "/phaser-3.86.0/assets/map_professor/strokespritesheet20121.png"
        );
        this.load.spritesheet(
            "BN",
            "/phaser-3.86.0/src/img/conteudo/PERSONAGEM/george_0.png",
            {
                frameWidth: 92, // Largura de cada quadro
                frameHeight: 92, // Altura de cada quadro
            }
        );
    }

    create() {
        const map = this.make.tilemap({ key: "mapa" });

        const CFS1 = map.addTilesetImage(
            "Classroom_First_Spritesheet_1",
            "CFS1"
        );
        const CFS6 = map.addTilesetImage(
            "Classroom_First_Spritesheet_6",
            "CFS6"
        );
        const CPFSc = map.addTilesetImage(
            "Classroom_PropsFirst_Spritesheet-cop",
            "CPFSc"
        );
        const CPSP4 = map.addTilesetImage(
            "ClassroomPropsSecondSpritesheet4",
            "CPSP4"
        );
        const CSS7 = map.addTilesetImage("ClassroomSecondSpritesheet7", "CSS7");
        const CSSC = map.addTilesetImage(
            "ClassroomSecond_Spritesheet-cop",
            "CSSC"
        );
        const POFS4 = map.addTilesetImage(
            "PrincipalOfficeSecondSpritesheet4",
            "POFS4"
        );
        const SPS = map.addTilesetImage("strokespritesheet20125", "SPS");
        const WFD5 = map.addTilesetImage(
            "Wallfloordoorw_First_Spritesheet_5",
            "WFD5"
        );

        const chao = map.createLayer("chao", [SPS], 0, 0);
        const parede = map.createLayer("parede", [WFD5], 0, 0);
        const quadro = map.createLayer("quadro", [CPFSc], 0, 0);

        const decoracao = map.createLayer(
            "decoracao",
            [CFS1, CPSP4, CSSC],
            0,
            0
        );
        //this.add.image(400, 300, "bgC1");

        // Criar o personagem com física
        this.physics.world.on("worldbounds", (body) => {
            const letra = body.gameObject;
            if (
                letra &&
                letra.texture &&
                letra.y > this.sys.game.config.height
            ) {
                letra.destroy(); // Destrói a letra quando atinge o limite
                console.log(`Letra destruída: ${letra.texture.key}`);
            }
        });
        this.botaoApagar = this.add.image(700, 850, "botaoApagar1Letra"); // Substitua "botaoplay" pela imagem do botão desejado
        this.botaoApagar.setInteractive().setScale(0.5); // Tornar o botão interativo e ajustar o tamanho
        this.botaoApagar.on("pointerdown", () => {
            this.removerUltimaLetra();
        });
        this.player = this.physics.add.sprite(800, 800, "BN");
        this.player.setCollideWorldBounds(true); // Impede que o personagem saia da tela
        this.player.body.onWorldBounds = true;
        //this.player.setVelocity(0); // Inicia sem velocidade
        chao.setCollisionByExclusion([-1]); // Configura colisões no chão
        this.physics.add.collider(this.player, chao);
        // Habilita colisão para as camadas desejadas
        this.physics.add.collider(this.player, parede);
        parede.setCollisionByExclusion([-1]); // Colisões em paredes,
        this.letras = this.physics.add.group({
            defaultKey: "A", // Opcional: define a textura padrão
            maxSize: 20, // Limite máximo de letras na tela
            allowGravity: false,
        });
        // Criar o personagem com física
        this.botaoConfirmarVerde = this.add.image(
            600,
            600,
            "botaoConfirmarVerde"
        );
        this.botaoConfirmarVerde.setVisible(false).setScale(0.5);

        this.botaoConfirmarVermelho = this.add.image(
            600,
            600,
            "botaoConfirmarVermelho"
        );
        this.botaoConfirmarVermelho.setVisible(false).setScale(0.5);
        this.dicionario = ["ZEBRA", "CAO", "CASA", "BOLA", "SOL"]; // Exemplo de palavras válidas

        // Criar as teclas de controle
        this.cursors = this.input.keyboard.createCursorKeys();
        // Define a profundidade para estar acima de outras camadas
        // Animação para movimento para baixo (quadros 0, 4, 8, 12)
        this.anims.create({
            key: "down",
            frames: this.anims.generateFrameNumbers("BN", {
                frames: [0, 4, 8, 12],
            }),
            frameRate: 10,
            repeat: -1,
        });

        // Animação para movimento para cima (quadros 1, 5, 9, 13)
        this.anims.create({
            key: "up",
            frames: this.anims.generateFrameNumbers("BN", {
                frames: [2, 6, 10, 14],
            }),
            frameRate: 10,
            repeat: -1,
        });

        // Animação para movimento para a esquerda (quadros 2, 6, 10, 14)
        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers("BN", {
                frames: [1, 5, 9, 13],
            }),
            frameRate: 10,
            repeat: -1,
        });

        // Animação para movimento para a direita (quadros 3, 7, 11, 15)
        this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers("BN", {
                frames: [3, 7, 11, 15],
            }),
            frameRate: 10,
            repeat: -1,
        });
        this.timerText = this.add
            .text(
                this.sys.game.config.width / 2,
                this.sys.game.config.height / 2,
                this.startTimer,
                { fontSize: "64px", fill: "#ffffff" }
            )
            .setOrigin(0.5); // Centraliza o texto

        // Evento para decrementar o timer a cada segundo
        this.time.addEvent({
            delay: 1000, // 1 segundo
            callback: this.updateStartTimer,
            callbackScope: this,
            loop: true,
        });

        // Pausar interações do jogo enquanto o timer não acaba
        this.physics.pause();

        this.time.addEvent({
            delay: 2000, // A cada 1 segundo
            callback: this.spawnLetra,
            callbackScope: this,
            loop: true,
        });

        this.mostrarPalavras = this.add.image(100, 850, "mostrarPalavras");
        this.mostrarPalavras.setOrigin(0.1);
        this.areaEntrega = this.add.image(400, 300, "areaEntrega");
        this.teclaSoltar = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        ); // Ajuste para Phaser 3.x
        this.areaEntrega.setOrigin(0.5); // Centraliza a imagem
        this.areaEntrega.setScale(0.8); // Ajusta o tamanho, se necessário
        this.physics.add.existing(this.areaEntrega, true);
        this.physics.add.existing(this.areaEntrega, true); // Tornar a área estática
        this.letrasExibidas = [];
        this.palavraFormada = "";
        // Detectar colisão com a área de entrega
        this.physics.add.overlap(
            this.player,
            this.areaEntrega,
            this.entregarLetra,
            null,
            this
        );
        this.teclaSoltar.on("down", () => {
            if (this.carregandoLetra) {
                this.soltarLetra();
            }
        });
        this.soltarLetra = () => {
            if (this.carregandoLetra) {
                const letra = this.carregandoLetra;
                this.time.delayedCall(500, () => {
                    // Atraso para dar tempo de ver a queda
                    letra.destroy(); // Remove a letra da cena
                });
                // Faz a letra cair para baixo (ajuste a velocidade conforme necessário)
                this.carregandoLetra = null; // A letra não está mais com o jogador
            }
        };
        this.anims.create({
            key: "pickup",
            frames: this.anims.generateFrameNumbers("BN", {
                start: 16,
                end: 19,
            }), // Ajuste os frames
            frameRate: 10,
            repeat: 0, // Toca uma vez
        });
        this.physics.add.overlap(
            this.player,
            this.letras,
            this.pegarLetra,
            null,
            this
        );
        this.physics.add.overlap(
            this.player,
            this.letras,
            this.pegarLetra,
            null,
            this
        );
        this.physics.add.overlap(
            this.player,
            this.areaEntrega,
            this.entregarLetra,
            null,
            this
        );
    }
    removerUltimaLetra() {
        if (this.palavraFormada.length > 0) {
            // Remove a última letra da palavra formada
            this.palavraFormada = this.palavraFormada.slice(0, -1);

            // Atualiza a exibição de letras na interface
            this.atualizarExibicaoLetras();

            console.log(`Palavra atualizada: ${this.palavraFormada}`);
        } else {
            console.log("Não há letras para remover.");
        }
    }
    pegarLetra(player, letra) {
        if (!this.carregandoLetra) {
            console.log(`Pegou a letra: ${letra.texture.key}`);

            // Inicia uma animação especial ao pegar a letra (caso exista)
            player.anims.play("pickup", true); // Certifique-se de criar essa animação

            // Configura a letra para ser "carregada"
            this.carregandoLetra = letra;
            letra.body.setVelocity(0); // Para o movimento da letra
            letra.body.setAllowGravity(false); // Desativa a gravidade
            letra.setCollideWorldBounds(false); // Remove colisões de bordas
            letra.setAlpha(0.8); // Faz a letra mais transparente para indicar que está sendo carregada
        }
    }

    entregarLetra(player, areaEntrega) {
        if (this.carregandoLetra) {
            const distancia = Phaser.Math.Distance.Between(
                player.x,
                player.y,
                areaEntrega.x,
                areaEntrega.y
            );

            if (distancia <= 120) {
                const letraAtual = this.carregandoLetra.texture.key;

                // Adiciona a letra à palavra formada
                this.palavraFormada += letraAtual;
                console.log(`Letra entregue: ${letraAtual}`);

                // Atualizar a exibição de letras na interface
                this.atualizarExibicaoLetras();

                // Remover a letra do jogo
                this.carregandoLetra.destroy();
                this.carregandoLetra = null;

                // Validar progressivamente
                this.validarProgresso();
            } else {
                console.log("Chegue mais perto para entregar a letra.");
            }
        }
    }
    validarProgresso() {
        // Verificar se a palavra formada até agora está correta como prefixo
        const palavraCorreta = this.dicionario.find((palavra) =>
            palavra.startsWith(this.palavraFormada)
        );

        if (palavraCorreta) {
            console.log(`Progresso correto: ${this.palavraFormada}`);
            this.botaoConfirmarVerde.setVisible(true);
            this.botaoConfirmarVermelho.setVisible(false);

            // Verificar se a palavra completa foi formada
            if (palavraCorreta === this.palavraFormada) {
                console.log("Parabéns! Você formou a palavra completa!");
                // Aqui você pode adicionar lógica para terminar a rodada
            }
        } else {
            console.log(`Progresso errado: ${this.palavraFormada}`);
            this.botaoConfirmarVermelho.setVisible(true);
            this.botaoConfirmarVerde.setVisible(false);
        }
    }
    atualizarExibicaoLetras() {
        // Limpa todas as letras exibidas no fundo antes de recriar
        this.letrasExibidas.forEach((letra) => letra.destroy());
        this.letrasExibidas = [];

        // Espaçamento entre as letras
        const espacamento = 50;

        // Recria os sprites das letras na nova ordem
        for (let i = 0; i < this.palavraFormada.length; i++) {
            const letra = this.palavraFormada[i];

            const novaPosicaoX = this.mostrarPalavras.x + 20 + i * espacamento;

            const novaLetra = this.add.image(
                novaPosicaoX,
                this.mostrarPalavras.y + this.mostrarPalavras.height / 2,
                letra
            );

            novaLetra.setOrigin(0.5);
            novaLetra.setScale(0.8);
            novaLetra.setDepth(1);

            this.letrasExibidas.push(novaLetra);
        }
    }
    validarPalavra() {
        // Verificar se a palavra formada está no dicionário
        if (this.dicionario.includes(this.palavraFormada)) {
            console.log("Parabéns! Você formou uma palavra correta!");
            this.botaoConfirmarVerde.setVisible(true); // Exibe o botão verde
            this.botaoConfirmarVermelho.setVisible(false); // Oculta o botão vermelho
        } else {
            console.log("Palavra inválida!");
            this.botaoConfirmarVerde.setVisible(false); // Oculta o botão verde
            this.botaoConfirmarVermelho.setVisible(true); // Exibe o botão vermelho
        }
    }
    apagarPalavra() {
        // Limpar a string armazenada e os sprites das letras
        this.palavraFormada = "";

        this.letrasExibidas.forEach((letra) => letra.destroy());
        this.letrasExibidas = [];
        console.log("A palavra foi apagada!");
    }
    updateStartTimer() {
        if (this.startTimer > 1) {
            this.startTimer--;
            this.timerText.setText(this.startTimer); // Atualiza o texto na tela
        } else if (this.startTimer === 1) {
            // Quando o timer chega a 1, exibe "GO!" e inicia o jogo
            this.startTimer = 0; 
            this.timerText.setText("GO!"); // Exibe "GO!" no lugar do número
            this.time.delayedCall(500, () => {
                this.timerText.destroy(); // Remove o texto após 0,5s
                this.physics.resume(); // Retoma as interações do jogo
                this.gameStarted = true; // Marca que o jogo começou
            });
        } else if (this.startTimer <= 0 && this.gameStarted) {
            // Condição para quando o tempo acaba (tempo esgotado)
            this.exibirTelaTempoEsgotado();
            this.startTimer = -1; // Evita que a tela seja exibida novamente
        }
    }
    exibirTelaTempoEsgotado() {
        this.physics.pause();
        
        const telaTempoEsgotado = this.add.image(450, 400, "AcabouTempo");
        telaTempoEsgotado.setScale(0.8); // Ajusta o tamanho da imagem, se necessário
        const botaoReiniciar = this.add.image(450, 600, "botaoReiniciar"); // Substitua 'botaoReiniciar' pelo nome da chave do sprite
    botaoReiniciar.setScale(0.5); // Ajusta o tamanho do botão (opcional)
    botaoReiniciar.setInteractive(); // Torna o botão interativo

    botaoReiniciar.on("pointerdown", () => {
        this.scene.start("Cena1"); 
    });
        
    }
    spawnLetra() {
        if (!this.gameStarted) return;

        const letras = "ABCDHIOZER".split(""); // Adicione todas as letras que deseja usar
        const letraAleatoria =
            letras[Phaser.Math.Between(0, letras.length - 1)];

        const x = Phaser.Math.Between(150, 900); // Posição X aleatória
        const letra = this.letras.create(x, -50, letraAleatoria); // Spawna acima da tela

        letra.setVelocityY(150); // Faz a letra cair para baixo
        letra.body.setCollideWorldBounds(false); // Sem colisão com bordas
        letra.body.onWorldBounds = true; // Detecta limites

        // Remover a letra quando sair da tela
        letra.body.world.on("worldbounds", (body) => {
            if (
                body.gameObject === letra &&
                letra.y > this.sys.game.config.height
            ) {
                letra.destroy(); // Destrói a letra
                console.log(`Letra destruída: ${letra.texture.key}`);
            }
        });

        console.log(`Letra criada: ${letraAleatoria}`);
    }
    pegarLetra(player, letra) {
        if (!this.carregandoLetra) {
            // Verifica se o jogador já está carregando uma letra
            console.log(`Pegou a letra: ${letra.texture.key}`);
            this.carregandoLetra = letra; // Armazena a letra carregada
            letra.body.setVelocity(0); // Para o movimento da letra
            letra.setCollideWorldBounds(false); // Remove colisão com as bordas
            letra.body.enable = false; // Desativa o corpo físico da letra
            letra.setAlpha(0.5); // Ajusta a opacidade para indicar que está sendo carregada
        }
    }
    updateTimer() {
        if (this.timeLeft > 0) {
            this.timeLeft--; // Decrementa o tempo
        } else {
            // Quando o tempo acabar, implementar ações
            console.log("Time's Up!"); // Pode ser substituído por outra ação
            this.scene.pause(); // Opcional: Pausa a cena
        }
    }
    update() {
        if (!this.gameStarted) return; // Bloqueia o update até o jogo começar
        // Reseta a velocidade do personagem a cada frame
        this.player.setVelocity(0);
        if (this.teclaSoltar.isDown) {
            this.soltarLetra.call(this); // Chama a função de soltar a letra
        }
        // Movimenta o personagem com as setas e aplica as animações
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160); // Para mover para a esquerda
            this.player.anims.play("left", true); // Toca a animação 'left'
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160); // Para mover para a direita
            this.player.anims.play("right", true); // Toca a animação 'right'
        } else if (this.cursors.up.isDown) {
            this.player.setVelocityY(-160); // Para mover para cima
            this.player.anims.play("up", true); // Toca a animação 'up'
        } else if (this.cursors.down.isDown) {
            this.player.setVelocityY(160); // Para mover para baixo
            this.player.anims.play("down", true); // Toca a animação 'down'
        } else {
            // Se nenhuma tecla estiver pressionada, pare a animação
            this.player.anims.stop();
        }
        if (this.carregandoLetra) {
            this.carregandoLetra.x = this.player.x;
            this.carregandoLetra.y = this.player.y - 20; // Ajusta para ficar acima do jogador
        }
    }
}
