import {Cliente, Pet} from './cliente';
import {Produto} from './produto'

export class ClienteService {
    private clientes: Cliente[] = [];

    public criarCliente(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    public atualizarCliente(cliente: Cliente): void {
        const index = this.clientes.findIndex((c) => c.id === cliente.id);
        if(index !== -1) {
            this.clientes[index] = cliente;
        }
    }

    public excluirCliente(id: number): void {
        this.clientes = this.clientes.filter((c) => c.id !== id);
    }

    public obterCliente(clienteId: number): Cliente[] {
        return this.clientes;
    }

    public obterClientes(): Cliente[] {
        return this.clientes;
    }

    public adicionarPet(clienteId: number, pet: Pet): void {
        const cliente = this.clientes.find((c) => c.id === clienteId);
        if (cliente) {
          cliente.pets.push(pet);
        }
      }
    
    public removerPet(clienteId: number, petId: number, pet: Pet): void{
        const cliente = this.clientes.find((c) => c.id === clienteId);
        if (cliente) {
            cliente.pets = cliente.pets.filter((pet) => pet.id !== petId)
        }
        
    }
}

