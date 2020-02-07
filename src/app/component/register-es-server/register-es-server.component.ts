import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EsConfigServerHttpService } from './es-http.service';

import { EsConfig } from 'src/app/entity/elasticSearchConfig';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-register-es-server',
  templateUrl: './register-es-server.component.html',
  styleUrls: ['./register-es-server.component.scss']
})
export class RegisterEsServerComponent implements OnInit {

  dataSource;
  esConfigForm: FormGroup;
  displayedColumns: string[] = ['IP Address','environment','active', 'action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private formBuilder: FormBuilder,
    public esHttpService: EsConfigServerHttpService
  ) { }

  ngOnInit() {
      this.intiEsServerForm();
      this.findAll();
  }

  intiEsServerForm() {
    this.esConfigForm = this.formBuilder.group({
      ipAddress: ['', Validators.required],
      isActive: [true,Validators.required],
      environment :[,Validators.required],
      port :['',Validators.required],

    });

  }
  verifyServerDetailsAndSave(){

    if(this.esConfigForm.valid){

      this.esHttpService.registeresEsServer(this.esConfigForm.value).subscribe(
        response =>{
        },
        error => {
        }
      )
    }

  }

  findAll(){
    this.esHttpService.findAllEsServerDetails().subscribe((data: any) => {
      this.dataSource =  new MatTableDataSource<EsConfig>(data);
      this.dataSource.paginator = this.paginator;
    },
    error => {
    });

  }

}
