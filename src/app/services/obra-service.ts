import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObraService {

  //listar
  url = 'http://localhost:8080/obra/listar';

  private http: HttpClient;
  constructor(handler: HttpBackend){
    this.http = new HttpClient(handler);
  }


  public getObras(){
    return this.http.get(this.url).pipe(map(response=>response));
  }
  
}
