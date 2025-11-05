import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {   

  //listar
  url = 'http://localhost:8080/login/';
  private handler = inject(HttpBackend);
  private http = new HttpClient(this.handler); // ignora interceptors

  // Estado reativo do login
  private logadoSubject = new BehaviorSubject<boolean>(this.temLogin());
  logado$ = this.logadoSubject.asObservable();

  private temLogin(): boolean {
    return localStorage.getItem('logado') === 'true';
  }

  public entrar(login: any, senha: any) {
    let usuario = { login, senha };

    return this.http.post(this.url + 'entrar', usuario, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      map((response: any) => {
        // 🔹 Se o backend retornar o usuário corretamente:
        localStorage.setItem("nome", response.nome);
        localStorage.setItem("login", response.login);
        localStorage.setItem("logado", "true");

        // Atualiza o estado global
        this.logadoSubject.next(true);
        return response;
      })
    );
  }

  public sair() {
    localStorage.removeItem("nome");
    localStorage.removeItem("login");
    localStorage.removeItem("logado");
    this.logadoSubject.next(false);
  }

}
