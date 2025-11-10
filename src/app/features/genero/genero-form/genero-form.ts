import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {SHARED_IMPORTS} from '../../../shared/util/shared-imports';

@Component({
  selector: 'app-genero-form',
  imports: [SHARED_IMPORTS],
  templateUrl: './genero-form.html',
  styleUrl: './genero-form.css',
})
export class GeneroForm {

  acao: string = 'Novo';

}
