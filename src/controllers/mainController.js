"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clienteController_1 = require("./clienteController");
var petController_1 = require("./petController");
var produtoController_1 = require("./produtoController");
var servicoController_1 = require("./servicoController");
var consumoController_1 = require("./consumoController");
var MainController = /** @class */ (function () {
    function MainController() {
        this.clienteController = new clienteController_1.default();
        this.petController = new petController_1.default();
        this.produtoController = new produtoController_1.default();
        this.servicoController = new servicoController_1.default();
        this.consumoController = new consumoController_1.default();
    }
    return MainController;
}());
exports.default = MainController;
