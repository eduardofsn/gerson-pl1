import Cliente from './cliente';

class Pet {
    nome: string;
    tipo: string;
    raca: string;
    cliente: Cliente;

    constructor(nome: string, tipo: string, raca: string, cliente: Cliente) {
        this.nome = nome;
        this.tipo = tipo;
        this.raca = raca;
        this.cliente = cliente;
    }
}

export default Pet;
