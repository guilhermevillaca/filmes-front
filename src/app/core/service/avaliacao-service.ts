import {inject, Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {Page} from '../model/page';
import {Obra} from '../model/obra';
import {HttpClient} from '@angular/common/http';
import {Avaliacao} from '../model/avaliacao';

@Injectable({
  providedIn: 'root',
})
export class AvaliacaoService {

  private url: string = 'http://localhost:8080/avaliacao';
  private http = inject(HttpClient);

  public getAvaliacaos(): Observable<Avaliacao[]> {
    return this.http.get<Avaliacao[]>(`${this.url}`).pipe(map(res => res));
  }

  public getPaginado(page: any, size: any): Observable<Page<Avaliacao>>{
    return this.http.get<Page<Avaliacao>>(`${this.url}/paginated?page=${page}&size=${size}`);
  }

  public findByObra_id(id: any, page: any, size: any): Observable<Page<Avaliacao>>{
    //http://localhost:8080/avaliacao/findByObra_Id/
    return this.http.get<Page<Avaliacao>>(`${this.url}/findByObra_Id/${id}?page=${page}&size=${size}`);
  }

}
