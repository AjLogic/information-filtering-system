import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { RdbmsEntity } from './register-entity.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RdbmsHttpService } from './rdbms-http.service'

@Component({
  selector: 'app-register-rdbms',
  templateUrl: './register-rdbms.component.html',
  styleUrls: ['./register-rdbms.component.scss']
})
export class RegisterRdbmsComponent implements OnInit {

  rdbmsRegisterForm: FormGroup;
  serverNamePrifix: string = "";

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private formBuilder: FormBuilder,
    public rdbmsHttpService: RdbmsHttpService
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.intiRdbmsForm();
  }


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'view', 'edit', 'delete'];
  dataSource = new MatTableDataSource<RdbmsEntity>(ELEMENT_DATA);

  intiRdbmsForm() {
    this.rdbmsRegisterForm = this.formBuilder.group({
      connectionType: ['', Validators.required],
      serverConnectionUrl: ['', Validators.required],
      port: [],
      userName: [null, Validators.required],
      password: [null, Validators.required],
      isActive: [true,Validators.required],
      selectedDatabase: []
    });

    this.rdbmsRegisterForm.controls['serverConnectionUrl'].disable();
  }
  resetForm() {
    this.rdbmsRegisterForm.controls['connectionType'].setValue(null);
    this.rdbmsRegisterForm.controls['serverConnectionUrl'].disable();
    this.rdbmsRegisterForm.controls['isActive'].setValue(true);
    this.rdbmsRegisterForm.controls['userName'].setValue(null);
    this.rdbmsRegisterForm.controls['password'].setValue(null);
    this.serverNamePrifix = "";
  }

  setDefaultDbUrl(event: any) {
    this.rdbmsRegisterForm.controls['serverConnectionUrl'].setValue(null);
    this.serverNamePrifix = '';
    this.serverNamePrifix = event.value;
    if (event.value == 'MySql') {
      this.serverNamePrifix = 'jdbc:mysql://';
    }
    else if (event.value == 'MsSql') {
      this.serverNamePrifix = 'jdbc:mssql://';
    }
    this.rdbmsRegisterForm.controls['serverConnectionUrl'].enable();

  }

  verifyServerDetailsAndSave() {
    if (this.rdbmsRegisterForm.valid) {
      let url = this.serverNamePrifix + this.rdbmsRegisterForm.controls['serverConnectionUrl'].value;
      console.log(url);
      this.rdbmsRegisterForm.controls['serverConnectionUrl'].setValue(url);
      this.rdbmsHttpService.registerRdbmsDatabase(this.rdbmsRegisterForm.value).subscribe(
        response =>{
          this.resetForm();
        },
        error => {
          this.resetForm();
        }
      )
    }
  };

  

}
const ELEMENT_DATA: RdbmsEntity[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
