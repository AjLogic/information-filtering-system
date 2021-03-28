import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterRdbmsComponent } from './register-rdbms.component';



const routes: Routes = [
  { path: 'chat', component: RegisterRdbmsComponent },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  RegisterRDBMSRoutingModule { }
