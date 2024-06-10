import Produto from '../models/produto';

class ProdutoController {
    produtos: Produto[];

    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto: Produto) {
        this.produtos.push(produto);
    }
}

export default ProdutoController;
