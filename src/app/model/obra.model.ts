import { Genero } from "./genero.model";

export interface Obra {
    id: number|null;
    titulo: string|null;
    descricao:string|null;
    anoLancamento:number|null;
    imagemUrl:string|null;
    tipo:string|null;
    genero?:Genero|null;
}