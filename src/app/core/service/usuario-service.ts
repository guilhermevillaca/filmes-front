import {inject, Injectable} from '@angular/core';
import {Usuario} from '../model/usuario';
import {GenericService} from './generic-service';
import {jwtDecode} from 'jwt-decode';
import {getToken} from '../../shared/util/util';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService extends GenericService<Usuario> {

  constructor() {
    super('http://localhost:8080/usuario');
  }

  ifUsuarioPerfilAdmin(): boolean {
    const token: string | null = getToken();
    if(token){
      const decoded: any = jwtDecode(token);
      if(decoded.perfil === 'ADMIN'){
        console.log(decoded.perfil)
        return true;
      }
    }
    return false;
  }
}
