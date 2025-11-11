import { HttpBackend, HttpClient } from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import { map, Observable } from 'rxjs';
import {Genero} from '../model/genero';
import {Page} from '../model/page';
import {Obra} from '../model/obra';
import {GenericService} from './generic-service';

@Injectable({
  providedIn: 'root',
})
export class GeneroService extends GenericService<Genero> {
  constructor() {
    super('http://localhost:8080/genero');
  }
}
