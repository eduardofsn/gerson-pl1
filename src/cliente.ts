import { Pet } from "./pet";

export interface Cliente{
    id: number;
    nome: string;
    cpf: string;
    telefones: string[];
    pets: Pet[];
}

export { Pet };
