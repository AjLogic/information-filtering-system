import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EsConfigServerHttpService } from './es-http.service';

@Component({
  selector: 'app-register-es-server',
  templateUrl: './register-es-server.component.html',
  styleUrls: ['./register-es-server.component.scss']
})
export class RegisterEsServerComponent implements OnInit {

  dataSource;
  esConfigForm: FormGroup;
  displayedColumns: string[] = ['serverConnectionUrl','environment','active', 'action'];

  constructor(
    private formBuilder: FormBuilder,
    public esHttpService: EsConfigServerHttpService
  ) { }

  ngOnInit() {
      this.intiEsServerForm();
  }

  intiEsServerForm() {
    this.esConfigForm = this.formBuilder.group({
      serverConnectionUrl: ['', Validators.required],
      isActive: [true,Validators.required],
      environment :[,Validators.required]
    
    
    });
   
  }
  verifyServerDetailsAndSave(){

    if(this.esConfigForm.valid){
      
      this.esHttpService.registerRdbmsDatabase(this.esConfigForm.value).subscribe(
        response =>{
        },
        error => {
        }
      )
    }

  }

}
