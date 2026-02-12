import { Routes } from '@angular/router';
import { Portfolio } from './components/portfolio/portfolio'; 
import { Sagamanager } from './components/sagamanager/sagamanager';

export const routes: Routes = [
     { path: '', component: Portfolio },
     { path: 'Sagamanager', component: Sagamanager }
];
