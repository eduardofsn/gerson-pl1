import ClienteController from './clienteController';
import PetController from './petController';
import ProdutoController from './produtoController';
import ServicoController from './servicoController';
import ConsumoController from './consumoController';

class MainController {
    clienteController: ClienteController;
    petController: PetController;
    produtoController: ProdutoController;
    servicoController: ServicoController;
    consumoController: ConsumoController;

    constructor() {
        this.clienteController = new ClienteController();
        this.petController = new PetController();
        this.produtoController = new ProdutoController();
        this.servicoController = new ServicoController();
        this.consumoController = new ConsumoController();
    }
}

export default MainController;
