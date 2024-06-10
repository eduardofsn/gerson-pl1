import Cliente from '../models/cliente';
import Produto from '../models/produto';
import Servico from '../models/servico';
import RegistroConsumo from '../models/registro';

class ConsumoController {
    registrosConsumo: RegistroConsumo[];

    constructor() {
        this.registrosConsumo = [];
    }

    registrarConsumo(cliente: Cliente, produtoOuServico: Produto | Servico, quantidade: number) {
        const registro = new RegistroConsumo(cliente, produtoOuServico, quantidade);
        this.registrosConsumo.push(registro);
    }
}

export default ConsumoController;
