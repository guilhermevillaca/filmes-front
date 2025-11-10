import { HttpBackend, HttpClient } from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeneroService {

  //listar
  url = 'http://localhost:8080/genero/';

  private http: HttpClient = inject(HttpClient);


  public getGeneros(){
    return this.http.get(this.url + 'listar').pipe(map(response=>response));
  }

}
