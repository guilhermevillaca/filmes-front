import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Usuario} from '../model/usuario';
import {Page} from '../model/page';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private url = 'http://localhost:8080/usuario'
  private http = inject(HttpClient);

  public getUsuarios() : Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}/listar2`).pipe(map(res => res));
  }

  public getPaginado(page: any, size: any): Observable<Page<Usuario>>{
    return this.http.get<Page<Usuario>>(`${this.url}/listar?page=${page}&size=${size}`);
  }
}
