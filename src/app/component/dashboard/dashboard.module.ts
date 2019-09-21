import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    SharedModule,
    DashboardRoutingModule
   
  ],
  exports: [],
  declarations: [
   DashboardComponent
   
  ]
})
export class DashboardModule { }
