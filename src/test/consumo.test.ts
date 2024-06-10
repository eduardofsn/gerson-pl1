import Cliente from '../models/cliente';
import Produto from '../models/produto';
import Servico from '../models/servico';
import RegistroConsumo from '../models/registro';
import ConsumoController from '../controllers/consumoController';

// Testes para a classe ConsumoController
describe('ConsumoController', () => {
    let consumoController: ConsumoController;
    let cliente: Cliente;

    beforeEach(() => {
        consumoController = new ConsumoController();
        cliente = new Cliente('Fulano', '123.456.789-00', ['(11) 99999-9999']);
    });

    test('Deve registrar um consumo', () => {
        const produto = new Produto('Ração', 'Alimento');
        const quantidade = 2;
        consumoController.registrarConsumo(cliente, produto, quantidade);
        const registro = consumoController.registrosConsumo[0];
        expect(registro).toBeDefined();
        expect(registro.cliente).toBe(cliente);
        expect(registro.produtoOuServico).toBe(produto);
        expect(registro.quantidade).toBe(quantidade);
    });

});
