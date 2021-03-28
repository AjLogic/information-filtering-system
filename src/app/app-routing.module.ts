import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterRdbmsComponent } from './component/register-chat/register-rdbms.component';

import { RequestInterceptorModule } from './shared/service/http-interceptor.service';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent },
  {path: 'chat', component: RegisterRdbmsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RequestInterceptorModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
