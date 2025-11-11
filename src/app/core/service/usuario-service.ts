import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Usuario} from '../model/usuario';
import {Page} from '../model/page';
import {GenericService} from './generic-service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService extends GenericService<Usuario> {
  constructor() {
    super('http://localhost:8080/usuario');
  }
}
