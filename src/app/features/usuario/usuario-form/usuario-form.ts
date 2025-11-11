import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {SHARED_IMPORTS} from '../../../shared/util/shared-imports';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  imports: [
    SHARED_IMPORTS
  ],
  templateUrl: './usuario-form.html',
  styleUrl: './usuario-form.css',
})
export class UsuarioForm {
    acao: string = 'Novo';

  form = new FormGroup({
    id: new FormControl<string | null>({value: null, disabled: true}),
    titulo: new FormControl<string | null>(''),
    descricao: new FormControl<string | null>(''),
    anoLancamento: new FormControl<number | null>(null),
    imagemUrl: new FormControl<string | null>(''),
    tipo: new FormControl<string | null>(''),
    genero: new FormControl<number | null>(null)
  });

}
