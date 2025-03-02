import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    SharedModule
   
  ],
  exports: [
     HeaderComponent,
     FooterComponent,
     BreadcrumbsComponent
  ],
  declarations: [
   
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
  ]
})
export class AppLayoutModule { }
