"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var registro_1 = require("../models/registro");
var ConsumoController = /** @class */ (function () {
    function ConsumoController() {
        this.registrosConsumo = [];
    }
    ConsumoController.prototype.registrarConsumo = function (cliente, produtoOuServico, quantidade) {
        var registro = new registro_1.default(cliente, produtoOuServico, quantidade);
        this.registrosConsumo.push(registro);
    };
    return ConsumoController;
}());
exports.default = ConsumoController;
