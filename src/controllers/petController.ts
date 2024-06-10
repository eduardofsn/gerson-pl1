import Pet from '../models/pet';
import Cliente from '../models/cliente';

class PetController {
    adicionarPet(cliente: Cliente, pet: Pet) {
        if (!cliente.pets) {
            cliente.pets = []; // Inicializa a propriedade pets se ainda não existir
        }
        cliente.pets.push(pet);
    }
}

export default PetController;
