import Cliente from './cliente';
import Produto from './produto';
import Servico from './servico';

class RegistroConsumo {
    cliente: Cliente;
    produtoOuServico: Produto | Servico;
    quantidade: number;

    constructor(cliente: Cliente, produtoOuServico: Produto | Servico, quantidade: number) {
        this.cliente = cliente;
        this.produtoOuServico = produtoOuServico;
        this.quantidade = quantidade;
    }
}

export default RegistroConsumo;
