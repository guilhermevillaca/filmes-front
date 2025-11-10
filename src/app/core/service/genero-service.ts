import { HttpBackend, HttpClient } from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import { map, Observable } from 'rxjs';
import {Genero} from '../model/genero';
import {Page} from '../model/page';
import {Obra} from '../model/obra';

@Injectable({
  providedIn: 'root',
})
export class GeneroService {

  //listar
  url = 'http://localhost:8080/genero/';

  private http: HttpClient = inject(HttpClient);


  public getGeneros(): Observable<Genero[]>{
    return this.http.get<Genero[]>(this.url + 'listarTodos').pipe(map(response=>response));
  }

  public getPaginado(page: any, size: any): Observable<Page<Genero>>{
    return this.http.get<Page<Genero>>(`${this.url}listar?page=${page}&size=${size}`);
  }

}
