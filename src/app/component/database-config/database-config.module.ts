import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DatabaseConfigComponent } from './database-config.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    SharedModule
   
  ],
  exports: [],
  declarations: [
   DatabaseConfigComponent
   
  ]
})
export class DatabaseConfigModule { }
