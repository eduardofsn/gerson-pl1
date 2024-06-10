"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
var mainController_1 = require("./controllers/mainController");
var cliente_1 = require("./models/cliente");
var pet_1 = require("./models/pet");
// Inicializando os controladores
var mainController = new mainController_1.default();
// Criando alguns clientes
var cliente1 = new cliente_1.default('Fulano', '123.456.789-00', ['(11) 99999-9999']);
var cliente2 = new cliente_1.default('Ciclano', '987.654.321-00', ['(22) 88888-8888']);
// Adicionando os clientes ao sistema
mainController.clienteController.adicionarCliente(cliente1);
mainController.clienteController.adicionarCliente(cliente2);
// Criando pets para os clientes
var pet1 = new pet_1.default('Rex', 'Cachorro', 'Labrador', cliente1);
var pet2 = new pet_1.default('Mel', 'Gato', 'Siamês', cliente2);
// Adicionando os pets ao sistema
mainController.petController.adicionarPet(cliente1, pet1);
mainController.petController.adicionarPet(cliente2, pet2);
// Exibindo informações
console.log('Lista de clientes:');
console.log(mainController.clienteController.clientes);
console.log('\nLista de pets de Fulano:');
console.log(cliente1.pets);
