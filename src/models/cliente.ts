class Cliente {
    nome: string;
    cpf: string;
    telefones: string[];
    pets: any;

    constructor(nome: string, cpf: string, telefones: string[]) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefones = telefones;
    }
}

export default Cliente;
