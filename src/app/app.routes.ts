import { Routes } from '@angular/router';
import { Obra } from './obra/obra';
import { ObraForm } from './obra/obra-form/obra-form';
import { Painel } from './painel/painel';
import { Login } from './login/login';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'obra', component: Obra},
    {path: 'obra/editar/:id', component: ObraForm},
    {path: 'obra/novo', component: ObraForm},
    {path: 'login', component: Login},
    {path: 'painel', component: Painel}
];
