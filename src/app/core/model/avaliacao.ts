import { Obra as Obra } from "./obra";
import { Usuario as Usuario } from "./usuario";

export interface Avaliacao {
    id: string | null;
    nota:number | null;
    comentario: string | null;
    dataAvaliacao: string | null;
    usuario?: Usuario | null;
    obra?: Obra | null;
}
