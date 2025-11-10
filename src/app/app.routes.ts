import { Routes } from '@angular/router';
import { Painel } from './features/painel/painel';
import { Login } from './features/login/login';
import {authGuard} from './auth.guard';
import {Obra} from './features/obra/obra';
import {ObraForm} from './features/obra/obra-form/obra-form';

export const routes: Routes = [
    {path: '', component: Painel, canActivate: [authGuard]},
    {path: 'obra', component: Obra, canActivate: [authGuard]},
    {path: 'obra/editar/:id', component: ObraForm, canActivate: [authGuard]},
    {path: 'obra/novo', component: ObraForm, canActivate: [authGuard]},
    {path: 'login', component: Login},
    {path: 'painel', component: Painel, canActivate: [authGuard]},
];
