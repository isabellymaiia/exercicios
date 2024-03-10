class Funcionario {

    constructor(nome, idade, salarioBase) {
        // cria parâmetros de funcionários, todos tem um nome, idade e salário base
        this.nome = nome;
        this.idade = idade;
        this.salarioBase = salarioBase;
    }

}

class Professor extends Funcionario {

    constructor(nome, idade, salarioBase, disciplina, horasAulaSemana, valorHorasAula) {
        // cria mais alguns parâmetros pertencentes ao funcionário professor
        super(nome, idade, salarioBase); // chama o construtor pai
        this.disciplina = disciplina; // adiciona o atributo de discplina 
        this.horasAulaSemana = horasAulaSemana; // adiciona atributo de horas de aula na semana
        this.valorHorasAula = valorHorasAula; // adiciona o valor das horas de aula 
    }

    calcularSalario() {
        this.salarioTotal = this.salarioBase + (this.horasAulaSemana * this.valorHorasAula); // calcula o salário total somando o salário base com a multiplicação das horas da semana e se valor
        console.log(`O(a) professor(a) ${this.nome} possui um salário de ${this.salarioTotal} reais`) //
    }

}

// cria objetos da classe professor 
const professor1 = new Professor('Cristiano', 46, 1500, 'Programação', 30, 100);
const professor2 = new Professor('Julia', 40, 1500, 'UX Design', 40, 100);

// chama o método de calcular salário para cada um dos objetos
professor1.calcularSalario();
professor2.calcularSalario();


