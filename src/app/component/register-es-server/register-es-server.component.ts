import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-es-server',
  templateUrl: './register-es-server.component.html',
  styleUrls: ['./register-es-server.component.scss']
})
export class RegisterEsServerComponent implements OnInit {

  dataSource;
  esConfigForm: FormGroup;
  displayedColumns: string[] = ['esServerUrl','environment','active', 'action'];

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
      this.intiEsServerForm();
  }

  intiEsServerForm() {
    this.esConfigForm = this.formBuilder.group({
      esServerUrl: ['', Validators.required],
      isActive: [true,Validators.required],
      environment :[,Validators.required]
    
    
    });
   
  }


}
