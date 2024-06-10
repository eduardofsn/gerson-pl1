"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RegistroConsumo = /** @class */ (function () {
    function RegistroConsumo(cliente, produtoOuServico, quantidade) {
        this.cliente = cliente;
        this.produtoOuServico = produtoOuServico;
        this.quantidade = quantidade;
    }
    return RegistroConsumo;
}());
exports.default = RegistroConsumo;
