import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutModule } from './layout/layout.module';

import { DashboardModule } from './component/dashboard/dashboard.module';
import { RegisterRdbmsComponent } from './component/register-rdbms/register-rdbms.component';
import { RegisterRdbmsModule } from './component/register-rdbms/register-rdbms.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterEsServerComponent } from './component/register-es-server/register-es-server.component';
import { RegisterEsModule } from './component/register-es-server/register-rdbms.module';
import { EsIndexComponent } from './component/es-index/es-index.component';
import { EsIndexModule } from './component/es-index/es-index.module';
import { RdbmsMetadataTreeComponent } from './component/rdbms-metadata-tree/rdbms-metadata-tree.component';

import { ChecklistDatabase } from './component/rdbms-metadata-tree/ChecklistDatabase';
import { RDBMSMetaDataTreeModule } from './component/rdbms-metadata-tree/rdbms-Metadata-tree.module';


const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard',  pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    DashboardModule,
    RegisterRdbmsModule,
    HttpClientModule,
    RegisterEsModule,
    EsIndexModule,
    RDBMSMetaDataTreeModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [],
  providers: [ChecklistDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
