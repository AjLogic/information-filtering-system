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
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
