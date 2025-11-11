import {CanActivate, CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../service/auth-service';
import {UsuarioService} from '../service/usuario-service';


export const perfilGuard: CanActivateFn = () => {
  const usuarioService = inject(UsuarioService);
  const router = inject(Router);

  if (!usuarioService.ifUsuarioPerfilAdmin()) {
    router.navigate(['/acesso-nao-autorizado']);
    return false;
  }
  return true;
}
