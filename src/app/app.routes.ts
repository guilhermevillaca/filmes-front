import { Routes } from '@angular/router';
import { Obra } from './obra/obra';
import { ObraForm } from './obra/obra-form/obra-form';

export const routes: Routes = [
    {path: '', component: Obra},
    {path: 'obra/editar/:id', component: ObraForm}
];
