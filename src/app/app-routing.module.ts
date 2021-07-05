import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProdComponent } from './conponents/new-prod/new-prod.component';
import { ProdListComponent } from './conponents/prod-list/prod-list.component';

const routes: Routes = [
  {
    path: 'Prod-list',
    component: ProdListComponent
  },
  {
    path: 'New-prod',
    component: NewProdComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
