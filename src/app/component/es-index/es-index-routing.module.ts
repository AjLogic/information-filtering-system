import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EsIndexComponent } from './es-index.component'




const routes: Routes = [
  { path: 'es-index', component: EsIndexComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  EsIndexRoutingModule { }
