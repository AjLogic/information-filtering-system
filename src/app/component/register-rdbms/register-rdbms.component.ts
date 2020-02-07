import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';

import { RdbmsEntity } from './register-entity.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RdbmsHttpService } from './rdbms-http.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-register-rdbms',
  templateUrl: './register-rdbms.component.html',
  styleUrls: ['./register-rdbms.component.scss']
})
export class RegisterRdbmsComponent implements OnInit , AfterContentInit {

  constructor(
    private formBuilder: FormBuilder,
    public rdbmsHttpService: RdbmsHttpService
  ) { }
;

  rdbmsRegisterForm: FormGroup;
  serverNamePrifix: string = "";
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[] = ['Connection Type', 'Server URL', 'User' ,'active', 'action'];

  ngOnInit() {
    this.intiRdbmsForm();
    this.findAll();

  }

  ngAfterContentInit(){

  }


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
          this.findAll();
        },
        error => {
          this.resetForm();
        }
      )
    }
  }
  findAll(){
    this.rdbmsHttpService.findAllRdbmsServerDetails().subscribe((data: any) => {
      this.dataSource =  new MatTableDataSource<RdbmsEntity>(data);
      this.dataSource.paginator = this.paginator;
    },
    error => {
    });

  }


}

