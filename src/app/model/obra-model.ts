import { GeneroModel as Genero } from "./genero-model";

export interface ObraModel {
  id: number;
  titulo: string;
  anoLancamento: number;
  genero: Genero;
}
