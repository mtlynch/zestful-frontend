import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoComponent } from './public/demo/demo.component';
import { SignUpComponent } from './public/sign-up/sign-up.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DemoComponent,
    pathMatch: 'full',
  },
  {
    path: 'demo',
    component: DemoComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignUpComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: DemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
