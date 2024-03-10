class SomadorDeNotas {

    constructor(){

        // cada instância terá sua própria variável total que começará com 0
        this.total = 0;
    }

    adicionarNota(nota){
        // soma o parâmetro de nota ao total
        this.total += nota;
    }
}

var somador = new SomadorDeNotas();

// adiciona somadores para compor o total
somador.adicionarNota(6);
somador.adicionarNota(7);
somador.adicionarNota(9);

// exbição do valor atual da propriedade 'total' do objeto 'somador'
console.log(`O total é ${somador.total}`);