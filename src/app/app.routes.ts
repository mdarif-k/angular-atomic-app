import { Routes } from '@angular/router';
import { NavBarComponent } from './navbar';
import { PricingHomeComponent } from './plans';
import { AboutComponent } from './about';
import { NoContentComponent } from 'angular-atomic-library';

import { DataResolver } from './app.resolver';
import { RegisterGuard } from './common/guards/register.guard';

export const ROUTES: Routes = [
  { path: '',      component: PricingHomeComponent },
  { path: 'home',  component: PricingHomeComponent },
  { path: 'plans', loadChildren: './plans#PricingDetailsModule' },
  { path: 'register', canActivate: [ RegisterGuard ], loadChildren: './register#RegisterModule' },
  { path: 'summary', loadChildren: './invoice#InvoiceModule' },
  { path: 'about', component: AboutComponent },
  { path: '**',    component: NoContentComponent },
];
