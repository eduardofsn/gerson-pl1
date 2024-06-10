import Produto from '../models/produto';
import ProdutoController from '../controllers/produtoController';

// Testes para a classe ProdutoController
describe('ProdutoController', () => {
    let produtoController: ProdutoController;

    beforeEach(() => {
        produtoController = new ProdutoController();
    });

    test('Deve adicionar um produto', () => {
        const produto = new Produto('Ração', 'Alimento');
        produtoController.adicionarProduto(produto);
        expect(produtoController.produtos).toContain(produto);
    });
});
