import { Routes } from '@angular/router';
import { Portfolio } from './components/portfolio/portfolio'; 
import { Homepage } from './components/portfolio/homepage/homepage';
import { AboutPage } from './components/portfolio/about-page/about-page';
import { Projects } from './components/portfolio/projects/projects';

import { Sagamanager } from './components/sagamanager/sagamanager';
import { SagaManagerHomepage } from './components/sagamanager/homepage/homepage';


export const routes: Routes = [
  {
    path: '',
    component: Portfolio,
    children: [
      { path: '', component: Homepage },
      { path: 'about', component: AboutPage },
      { path: 'projects', component: Projects },
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