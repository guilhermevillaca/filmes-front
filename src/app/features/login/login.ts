import { Component, inject } from '@angular/core';
import { LoginService } from '../../core/service/login-service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthService} from '../../core/service/auth-service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private loginService = inject(LoginService);
  private authService: AuthService = inject(AuthService);

  private route = inject(Router);

  formLogin = new FormGroup({
    login: new FormControl<string>(''),
    senha: new FormControl<string>('')
  });

  public entrar() {

    console.log(this.formLogin.value);

    const login = this.formLogin.get('login')?.value;
    const senha = this.formLogin.get('senha')?.value;

    this.loginService.entrar(login, senha).subscribe({
      next: () => this.route.navigate(['painel']),
      error: (err) => console.error(err)
    });

  }

}
