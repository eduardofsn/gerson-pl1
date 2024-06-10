// index.ts
import MainController from './controllers/mainController';
import Cliente from './models/cliente';
import Produto from './models/produto';
import Servico from './models/servico';
import Pet from './models/pet';

// Inicializando os controladores
const mainController = new MainController();

// Criando alguns clientes
const cliente1 = new Cliente('Fulano', '123.456.789-00', ['(11) 99999-9999']);
const cliente2 = new Cliente('Ciclano', '987.654.321-00', ['(22) 88888-8888']);

// Adicionando os clientes ao sistema
mainController.clienteController.adicionarCliente(cliente1);
mainController.clienteController.adicionarCliente(cliente2);

// Criando pets para os clientes
const pet1 = new Pet('Rex', 'Cachorro', 'Labrador', cliente1);
const pet2 = new Pet('Mel', 'Gato', 'Siamês', cliente2);

// Adicionando os pets ao sistema
mainController.petController.adicionarPet(cliente1, pet1);
mainController.petController.adicionarPet(cliente2, pet2);

// Exibindo informações
console.log('Lista de clientes:');
console.log(mainController.clienteController.clientes);
console.log('\nLista de pets de Fulano:');
console.log(cliente1.pets);
