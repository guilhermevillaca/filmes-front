import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './core/layouts/footer/footer';
import { Header } from './core/layouts/header/header';
import {BehaviorSubject, Observable, of} from 'rxjs';
import { LoginService } from './core/service/login-service';
import {AuthService} from './core/service/auth-service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  logado: Observable<boolean> = of(false);
  private loginService = inject(LoginService);
  private authService: AuthService = inject(AuthService);
  protected readonly title = signal('arte-front');


  ngOnInit() {
    this.loginService.logado$.subscribe(
      valor => {
        if(this.authService.isAuthenticated()){
          this.logado = this.loginService.logado$; // observe o cifrão para lembrar que é um Observable
          }
      }
    );
  }

}
