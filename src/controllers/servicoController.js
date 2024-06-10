"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServicoController = /** @class */ (function () {
    function ServicoController() {
        this.servicos = [];
    }
    ServicoController.prototype.adicionarServico = function (servico) {
        this.servicos.push(servico);
    };
    return ServicoController;
}());
exports.default = ServicoController;
