import Cliente from '../models/cliente';
import ClienteController from '../controllers/clienteController';

// Testes para a classe ClienteController
describe('ClienteController', () => {
    let clienteController: ClienteController;

    beforeEach(() => {
        clienteController = new ClienteController();
    });

    test('Deve adicionar um cliente', () => {
        const cliente = new Cliente('Fulano', '123.456.789-00', ['(11) 99999-9999']);
        clienteController.adicionarCliente(cliente);
        expect(clienteController.clientes).toContain(cliente);
    });
});
