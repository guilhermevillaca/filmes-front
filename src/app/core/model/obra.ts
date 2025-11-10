import { Genero } from "./genero";

export interface Obra {
  id: number;
  titulo: string;
  anoLancamento: number;
  genero: Genero;
}
