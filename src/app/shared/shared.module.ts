import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListFilterPipe } from './filter/list-filter.pipe';

@NgModule({
    imports: [
      CommonModule,
      MaterialModule,
      ReactiveFormsModule
    ],
    exports: [
      CommonModule,
      MaterialModule,
      ReactiveFormsModule
      
    ],
    providers:[ListFilterPipe],
    declarations:[ListFilterPipe]
  })
export class SharedModule { }
