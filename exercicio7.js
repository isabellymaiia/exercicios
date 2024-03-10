class Animal {

    // define os parâmetros da classe
    constructor(nome, idade){
        this.nome = nome; // this se refere ao objeto que está sendo criado
        this.idade = idade;
    }

    // método para descrever 
    descrever(){
        console.log(`Nome do Animal: ${this.nome} \nIdade do Animal: ${this.idade}`);
    }

}

// fornece valores para os parâmetros 
const cachorro = new Animal ('Marley', 1);
const gato = new Animal ('Garfield', 5);

// chama o método de descrever
cachorro.descrever();
gato.descrever();