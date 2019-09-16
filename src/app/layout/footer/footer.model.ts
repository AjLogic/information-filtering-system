import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { MatFormFieldModule, MatToolbarModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    SharedModule
  ],
  declarations: [FooterComponent]
})
export class FooterModule { }
