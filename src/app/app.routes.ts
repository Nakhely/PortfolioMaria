import {RouterModule, Routes} from '@angular/router';
import {AboutComponentComponent} from './about-component/about-component.component';
import {MyworksComponentComponent} from './myworks-component/myworks-component.component';

/* Fichero de rutas para el navbar */

const APP_ROUTES: Routes = [
  {path: 'about_me', component: AboutComponentComponent},
  {path: 'my_works', component: MyworksComponentComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'about_me'}
];

// tslint:disable-next-line:variable-name
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
