import { ObraModel as Obra } from "./obra-model";
import { UsuarioModel as Usuario } from "./usuario-model";

export interface AvaliacaoModel {
    id: number;    
    nota:number;    
    comentario: string;
    dataAvaliacao: string;
    usuario: Usuario;    
    obra: Obra;
}