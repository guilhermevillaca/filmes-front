import { Component, inject, } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { LoginService } from '../service/login-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  private route = inject(Router);
  private loginService = inject(LoginService);

  public sair() {
    this.loginService.sair();
    this.route.navigate(['/login']);
  }

}
