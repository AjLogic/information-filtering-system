import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterEsServerComponent } from './register-es-server.component';




const routes: Routes = [
  { path: 'register-es', component: RegisterEsServerComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  RegisterEsRoutingModule { }
