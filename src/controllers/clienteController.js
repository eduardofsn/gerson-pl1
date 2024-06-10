"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClienteController = /** @class */ (function () {
    function ClienteController() {
        this.clientes = [];
    }
    ClienteController.prototype.adicionarCliente = function (cliente) {
        this.clientes.push(cliente);
    };
    ClienteController.prototype.buscarClientePorCPF = function (cpf) {
        return this.clientes.find(function (cliente) { return cliente.cpf === cpf; });
    };
    ClienteController.prototype.atualizarCliente = function (cpf, novoCliente) {
        var index = this.clientes.findIndex(function (cliente) { return cliente.cpf === cpf; });
        if (index !== -1) {
            this.clientes[index] = novoCliente;
        }
    };
    ClienteController.prototype.removerCliente = function (cpf) {
        this.clientes = this.clientes.filter(function (cliente) { return cliente.cpf !== cpf; });
    };
    return ClienteController;
}());
exports.default = ClienteController;
