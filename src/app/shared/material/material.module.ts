import { NgModule } from '@angular/core';
import { MatTableModule, MatPaginatorModule, MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatOptionModule, MatSelect, MatSelectModule, MatTabGroup, MatTabsModule, MatButtonToggleModule, MatButtonToggleGroup, MatButtonModule, MatCheckboxModule, MatDividerModule, MatToolbarModule, MatMenuModule, MatSlideToggleModule, MatStepperModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BehaviorSubject} from 'rxjs';
@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatTreeModule,
    MatDividerModule,
    MatToolbarModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatStepperModule
    

    
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatOptionModule,
    MatSelectModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatTreeModule,
    MatCheckboxModule,
    MatDividerModule,
    MatToolbarModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatStepperModule

  ]
})
export class MaterialModule { }
