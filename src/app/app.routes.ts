import { Routes } from '@angular/router';
import { Obra } from './obra/obra';
import { ObraForm } from './obra/obra-form/obra-form';
import { Painel } from './painel/painel';
import { Login } from './login/login';

export const routes: Routes = [
    {path: '', component: Painel},
    {path: 'obra', component: Obra},
    {path: 'obra/editar/:id', component: ObraForm},
    {path: 'login', component: Login}
];
