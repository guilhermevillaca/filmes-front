import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ObraModel as Obra } from '../model/obra-model';
import { PageModel as Page } from '../model/page-model';

@Injectable({
  providedIn: 'root',
})
export class ObraService {

  //listar
  url = 'http://localhost:8080/obra/';

  private http: HttpClient;
  constructor(handler: HttpBackend){
    this.http = new HttpClient(handler);
  }

  public getObras(){
    return this.http.get(this.url + 'listar').pipe(map(response=>response));
  }

  public getObrasPaginado(page: any, size: any): Observable<Page<Obra>>{
    return this.http.get<Page<Obra>>(`${this.url}listar/paginado?=page=${page}&size=${size}`);
  }

  //http://localhost:8080/obra/listar/1
  public getObraById(id: number){
    return this.http.get(this.url + 'listar/' + id).pipe(map(response=>response));
  }

  public salvar(id: any, obra: any): Observable<any>{
    if(id){
      return this.http.put(this.url + 'atualizar/' + id, obra);
    }
    return this.http.post(this.url + 'novo', obra);
  }
  
}
