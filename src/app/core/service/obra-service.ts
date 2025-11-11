import {HttpBackend, HttpClient, HttpHeaders} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import { map, Observable } from 'rxjs';
import { Obra } from '../model/obra';
import { Page } from '../model/page';
import {GenericService} from './generic-service';

@Injectable({
  providedIn: 'root',
})
export class ObraService extends GenericService<Obra> {
  constructor() {
    super('http://localhost:8080/obra');
  }
}
