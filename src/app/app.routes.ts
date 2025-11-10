import {Routes} from '@angular/router';
import {Painel} from './features/painel/painel';
import {Login} from './features/login/login';
import {authGuard} from './auth.guard';
import {ObraList} from './features/obra/obra-list';
import {ObraForm} from './features/obra/obra-form/obra-form';
import {GeneroList} from './features/genero/genero-list';
import {UsuarioList} from './features/usuario/usuario-list';
import {GeneroForm} from './features/genero/genero-form/genero-form';
import {UsuarioForm} from './features/usuario/usuario-form/usuario-form';

export const routes: Routes = [
  {path: '', component: Painel, canActivate: [authGuard]},
  {path: 'obra', component: ObraList, canActivate: [authGuard]},
  {path: 'obra/editar/:id', component: ObraForm, canActivate: [authGuard]},
  {path: 'obra/novo', component: ObraForm, canActivate: [authGuard]},
  {path: 'login', component: Login},
  {path: 'painel', component: Painel, canActivate: [authGuard]},
  {path: 'genero', component: GeneroList, canActivate: [authGuard]},
  {path: 'genero/editar/:id', component: GeneroForm, canActivate: [authGuard]},
  {path: 'genero/novo', component: GeneroForm, canActivate: [authGuard]},
  {path: 'usuario', component: UsuarioList, canActivate: [authGuard]},
  {path: 'usuario/editar/:id', component: UsuarioForm, canActivate: [authGuard]},
  {path: 'usuario/novo', component: UsuarioForm, canActivate: [authGuard]},
];
