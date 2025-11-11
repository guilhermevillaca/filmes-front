import {inject, Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Page} from '../model/page';
import {Obra} from '../model/obra';
import {HttpClient} from '@angular/common/http';
import {Avaliacao} from '../model/avaliacao';
import {GenericService} from './generic-service';

@Injectable({
  providedIn: 'root',
})
export class AvaliacaoService extends GenericService<Avaliacao> {

  constructor() {
    super('http://localhost:8080/avaliacao');
  }

  public findByObra_id(id: any, page: any, size: any): Observable<Page<Avaliacao>>{
    //http://localhost:8080/avaliacao/findByObra_Id/
    return this.http.get<Page<Avaliacao>>(`${this.baseUrl}/findByObra_Id/${id}?page=${page}&size=${size}`);
  }
}
