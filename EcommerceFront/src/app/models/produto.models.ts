import { Categoria } from "./categoria.models";

export interface Produto {
    id?: number;
    nome?: string;
    descricao?: string;
    quantidade?: number;
    valor?: number;
    criadoEm?: string;
    categoriaId?: number;
    categoria?: Categoria;
}
