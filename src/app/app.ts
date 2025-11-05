import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from './service/login-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  logado: boolean = false;
  private loginService = inject(LoginService);
  protected readonly title = signal('arte-front');


  ngOnInit() {
    this.loginService.logado$.subscribe(
      valor => this.logado = valor
    );
  }

}
