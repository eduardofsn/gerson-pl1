import { ClienteService } from "./clienteservice";
import { ProdutoService } from "./produtoservice";

const clienteService = new ClienteService();
const produtoService = new ProdutoService();

// Exemplos de uso

const cliente1 = {
    id: 1,
    nome: 'João',
    cpf: '123.456.789-00',
    telefones: ['11 1234-5678', '11 98765-4321'],
    pets: [],
};

clienteService.criarCliente(cliente1);


const produto1 = {
    id: 1,
    nome: 'Ração',
    preco: 50.0,
    tipo: 'Alimento',
};

produtoService.criarProduto(produto1);

clienteService.adicionarPet(1, {
    id: 1,
    nome: 'Bidu',
    raca: 'Vira-lata',
    tipo: 'Cachorro',
});

console.log(clienteService.obterClientes());
console.log(produtoService.obterProdutos());
