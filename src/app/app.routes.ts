import {Routes} from '@angular/router';
import {Painel} from './features/painel/painel';
import {Login} from './features/login/login';
import {authGuard} from './core/guard/auth.guard';
import {ObraList} from './features/obra/obra-list';
import {ObraForm} from './features/obra/obra-form/obra-form';
import {GeneroList} from './features/genero/genero-list';
import {UsuarioList} from './features/usuario/usuario-list';
import {GeneroForm} from './features/genero/genero-form/genero-form';
import {UsuarioForm} from './features/usuario/usuario-form/usuario-form';
import {AcessoNaoAutorizado} from './features/site/acesso-nao-autorizado/acesso-nao-autorizado';
import {perfilGuard} from './core/guard/perfil.guard';

export const routes: Routes = [
  {path: '', component: Painel, canActivate: [authGuard, perfilGuard]},
  {path: 'obra', component: ObraList, canActivate: [authGuard, perfilGuard]},
  {path: 'obra/editar/:id', component: ObraForm, canActivate: [authGuard, perfilGuard]},
  {path: 'obra/novo', component: ObraForm, canActivate: [authGuard, perfilGuard]},
  {path: 'login', component: Login},
  {path: 'painel', component: Painel, canActivate: [authGuard, perfilGuard]},
  {path: 'genero', component: GeneroList, canActivate: [authGuard, perfilGuard]},
  {path: 'genero/editar/:id', component: GeneroForm, canActivate: [authGuard, perfilGuard]},
  {path: 'genero/novo', component: GeneroForm, canActivate: [authGuard, perfilGuard]},
  {path: 'usuario', component: UsuarioList, canActivate: [authGuard, perfilGuard]},
  {path: 'usuario/editar/:id', component: UsuarioForm, canActivate: [authGuard, perfilGuard]},
  {path: 'usuario/novo', component: UsuarioForm, canActivate: [authGuard, perfilGuard]},

  {path: 'acesso-nao-autorizado', component: AcessoNaoAutorizado}
];
