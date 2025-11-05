import { Component, inject } from '@angular/core';
import { LoginService } from '../service/login-service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  private route = inject(Router);

  formLogin = new FormGroup({
    login: new FormControl<string>(''),
    senha: new FormControl<string>('')
  });

  public entrar(){

    console.log(this.formLogin.value);

    this.loginService.entrar(this.formLogin.get('login')?.value, this.formLogin.get('senha')?.value).subscribe(
      login => {
        console.log(login);
        this.route.navigate(['/']);
      },
      error => {
        console.error(error);
      }
    )

  }

}
