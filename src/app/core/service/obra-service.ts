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



  public findByGenero(genero_id: any, page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/findByGenero/${genero_id}?page=${page}&size=${size}`);
  }

}
