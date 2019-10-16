import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterEsRoutingModule } from './register-es-routing.module';
import { RegisterEsServerComponent } from './register-es-server.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    SharedModule,
    RegisterEsRoutingModule
  ],
  exports: [],
  declarations: [
    RegisterEsServerComponent
  ],
  providers:[]
})
export class RegisterEsModule { }
