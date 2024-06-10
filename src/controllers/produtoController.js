"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProdutoController = /** @class */ (function () {
    function ProdutoController() {
        this.produtos = [];
    }
    ProdutoController.prototype.adicionarProduto = function (produto) {
        this.produtos.push(produto);
    };
    return ProdutoController;
}());
exports.default = ProdutoController;
