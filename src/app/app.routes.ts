import { Routes } from '@angular/router';
import { Obra } from './obra/obra';
import { ObraForm } from './obra/obra-form/obra-form';
import { Painel } from './painel/painel';
import { Login } from './login/login';
import {authGuard} from './auth.guard';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'obra', component: Obra, canActivate: [authGuard]},
    {path: 'obra/editar/:id', component: ObraForm, canActivate: [authGuard]},
    {path: 'obra/novo', component: ObraForm, canActivate: [authGuard]},
    {path: 'login', component: Login},
    {path: 'painel', component: Painel, canActivate: [authGuard]},
];
