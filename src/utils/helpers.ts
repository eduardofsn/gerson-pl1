import Cliente from "../models/cliente";
import RegistroConsumo from "../models/registro";

function calcularTotalConsumoPorCliente(cliente: Cliente, registros: RegistroConsumo[]): number {
    return registros.reduce((total, registro) => {
        if (registro.cliente === cliente) {
            return total + registro.quantidade;
        }
        return total;
    }, 0);
}

export { calcularTotalConsumoPorCliente };
