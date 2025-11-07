import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneroService {

  //listar
  url = 'http://localhost:8080/genero/';

  private http: HttpClient;
  constructor(handler: HttpBackend){
    this.http = new HttpClient(handler);
  }

  public getGeneros(){
    return this.http.get(this.url + 'listar').pipe(map(response=>response));
  }
  
}
