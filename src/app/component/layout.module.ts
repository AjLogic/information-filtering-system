import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DatabaseConfigComponent } from './database-config/database-config.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    SharedModule
   
  ],
  exports: [
    DatabaseConfigComponent
     
  ],
  declarations: [
   DatabaseConfigComponent
   
  ]
})
export class DatabaseConfigModule { }
