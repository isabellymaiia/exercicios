class Animal {

    // define os parâmetros da classe
    constructor(nome, idade) {

        this.nome = nome; // this se refere ao objeto que está sendo criado
        this.idade = idade;
        
    }

    // método para descrever o animal
    descrever() {

        console.log(`Nome do Animal: ${this.nome} \nIdade do Animal: ${this.idade}`);

    }

}

class Gato extends Animal {

    constructor(nome, idade, cor) {
        
        // chama o construtor da classe pai (Animal)
        super(nome, idade);
        this.cor = cor; // adiciona atributo de cor

    }

    descrever() {

        super.descrever(); // chama o método descrever da classe pai (Animal)
        console.log(`Cor do gato: ${this.cor}`);

    }

    miar() {

        console.log('Som: Miauuuu'); // exibe o som do gato

    }

}

// fornece valores para os parâmetros do gato e cachorro
const cachorro = new Animal('Marley', 1);
const gato = new Gato('Garfield', 5, 'Laranja');

cachorro.descrever(); // chama o método de descrever o chachorro
gato.descrever(); // chama o método de descrever o gato
gato.miar(); // chama método de exibir som do gato