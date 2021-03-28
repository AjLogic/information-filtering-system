import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutModule } from './layout/layout.module';

import { DashboardModule } from './component/dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterRdbmsModule } from './component/register-chat/register-rdbms.module';






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
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
