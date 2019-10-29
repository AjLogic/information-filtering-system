import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { RdbmsMetadataTreeComponent } from './rdbms-metadata-tree.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [RdbmsMetadataTreeComponent],
  exports:[RdbmsMetadataTreeComponent]
})
export class RDBMSMetaDataTreeModule { }
