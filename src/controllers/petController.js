"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PetController = /** @class */ (function () {
    function PetController() {
    }
    PetController.prototype.adicionarPet = function (cliente, pet) {
        if (!cliente.pets) {
            cliente.pets = []; // Inicializa a propriedade pets se ainda não existir
        }
        cliente.pets.push(pet);
    };
    return PetController;
}());
exports.default = PetController;
