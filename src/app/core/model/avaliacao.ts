import { Obra as Obra } from "./obra";
import { Usuario as Usuario } from "./usuario";

export interface Avaliacao {
    id: number;
    nota:number;
    comentario: string;
    dataAvaliacao: string;
    usuario: Usuario;
    obra: Obra;
}
