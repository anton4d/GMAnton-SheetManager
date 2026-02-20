import { Routes } from '@angular/router';
import { Portfolio } from './components/portfolio/portfolio'; 
import { Homepage } from './components/portfolio/homepage/homepage';

import { Sagamanager } from './components/sagamanager/sagamanager';
import { SagaManagerHomepage } from './components/sagamanager/homepage/homepage';


export const routes: Routes = [
  {
    path: '',
    component: Portfolio,
    children: [
      { path: '', component: Homepage },
      { path: 'about', component: Homepage },
      { path: 'projects', component: Homepage },
      { path: 'contact', component: Homepage },
    ]
  },{
    path:'SagaManager',
    component: Sagamanager,
    children:[
      { path: '', component: SagaManagerHomepage}
    ]
  }
];