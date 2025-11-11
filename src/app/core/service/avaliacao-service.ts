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

  public getPaginado(page: any, size: any): Observable<Page<Obra>>{
    return this.http.get<Page<Obra>>(`${this.url}paginated?page=${page}&size=${size}`);
  }

}
