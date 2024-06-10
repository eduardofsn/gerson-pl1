import Servico from '../models/servico';

class ServicoController {
    servicos: Servico[];

    constructor() {
        this.servicos = [];
    }

    adicionarServico(servico: Servico) {
        this.servicos.push(servico);
    }
}

export default ServicoController;
