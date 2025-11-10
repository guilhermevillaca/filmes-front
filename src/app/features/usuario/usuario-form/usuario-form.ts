import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {SHARED_IMPORTS} from '../../../shared/util/shared-imports';

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
}
