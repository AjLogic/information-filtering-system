import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterRdbmsComponent } from './register-rdbms.component';
import { RegisterRDBMSRoutingModule } from './registerrdbms-routing.module';
import { ChatHttpService } from './rdbms-http.service';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    SharedModule,
    RegisterRDBMSRoutingModule
  ],
  exports: [],
  declarations: [
    RegisterRdbmsComponent
  ],
  providers:[ChatHttpService]
})
export class RegisterRdbmsModule { }
