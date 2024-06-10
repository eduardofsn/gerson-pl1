import Cliente from '../models/cliente';

class ClienteController {
    clientes: Cliente[];

    constructor() {
        this.clientes = [];
    }

    adicionarCliente(cliente: Cliente) {
        this.clientes.push(cliente);
    }

    buscarClientePorCPF(cpf: string): Cliente | undefined {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }

    atualizarCliente(cpf: string, novoCliente: Cliente) {
        const index = this.clientes.findIndex(cliente => cliente.cpf === cpf);
        if (index !== -1) {
            this.clientes[index] = novoCliente;
        }
    }

    removerCliente(cpf: string) {
        this.clientes = this.clientes.filter(cliente => cliente.cpf !== cpf);
    }
}

export default ClienteController;
