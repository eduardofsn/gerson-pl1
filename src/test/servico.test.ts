import Servico from '../models/servico';
import ServicoController from '../controllers/servicoController';

// Testes para a classe ServicoController
describe('ServicoController', () => {
    let servicoController: ServicoController;

    beforeEach(() => {
        servicoController = new ServicoController();
    });

    test('Deve adicionar um serviço', () => {
        const servico = new Servico('Banho', 'Higiene');
        servicoController.adicionarServico(servico);
        expect(servicoController.servicos).toContain(servico);
    });
});
