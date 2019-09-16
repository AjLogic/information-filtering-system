import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutModule } from './layout/layout.module';
import { DatabaseConfigComponent } from './component/database-config/database-config.component';

const routes: Routes =[
  //{ path: '', redirectTo: '/dashboard',  pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    DatabaseConfigComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    AppRoutingModule,
    AppLayoutModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
