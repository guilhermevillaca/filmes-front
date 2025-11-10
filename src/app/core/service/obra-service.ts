import {HttpBackend, HttpClient, HttpHeaders} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import { map, Observable } from 'rxjs';
import { Obra } from '../model/obra';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root',
})
export class ObraService {

  //listar
  url = 'http://localhost:8080/obra/';

  private http: HttpClient = inject(HttpClient);

  public getObras(){
    return this.http.get(this.url + 'listar2').pipe(map(response=>response));
  }

  public getPaginado(page: any, size: any): Observable<Page<Obra>>{
    return this.http.get<Page<Obra>>(`${this.url}listar?page=${page}&size=${size}`);
  }

  //http://localhost:8080/obra/listar/1
  public getObraById(id: number): Observable<Obra>{
    return this.http.get<Obra>(this.url + 'listar/' + id).pipe(map(response=>response));
  }

  public salvar(id: any, obra: any): Observable<any>{
    if(id){
      return this.http.put(this.url + 'atualizar/' + id, obra);
    }
    return this.http.post(this.url + 'novo', obra);
  }

}
