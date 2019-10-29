import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { EsIndexComponent } from './es-index.component';
import { RegisterEsRoutingModule } from '../register-es-server/register-es-routing.module';
import { EsIndexRoutingModule } from './es-index-routing.module';
import { EsIndexHttpService } from './es-index-http.service';
import { RdbmsMetadataTreeComponent } from '../rdbms-metadata-tree/rdbms-metadata-tree.component';
import { RDBMSMetaDataTreeModule } from '../rdbms-metadata-tree/rdbms-Metadata-tree.module';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    SharedModule,
    EsIndexRoutingModule,
    RDBMSMetaDataTreeModule
  ],
  exports: [],
  declarations: [
    EsIndexComponent,
    
  ],
  providers:[EsIndexHttpService]
})
export class EsIndexModule { }
