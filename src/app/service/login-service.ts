import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  //listar
  url = 'http://localhost:8080/login/';
  private handler = inject(HttpBackend);
  private http = new HttpClient(this.handler); // ignora interceptors

  public entrar(login: any, senha: any) {
    let usuario = {
      login: login,
      senha: senha
    }
    return this.http.post(this.url + 'entrar', usuario,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }
    ).pipe(map(response => response));
  }



}
