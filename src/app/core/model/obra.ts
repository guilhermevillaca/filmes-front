import { Genero } from "./genero";
import {FormControl} from '@angular/forms';

export interface Obra {
  id: string | null;
  titulo?: string | null;
  descricao?: string | null;
  anoLancamento?: number | null;
  imagemUrl?: string | null;
  tipo?: string | null;
  genero?: Genero;
}
