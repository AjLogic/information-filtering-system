import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EsIndexHttpService } from './es-index-http.service';
import { ProjectsEsConfig } from 'src/app/entity/projectsEsConfig';
import { ProjectsRdbmsConfig } from 'src/app/entity/projectsRdbmsConfig';
import { Observable } from 'rxjs';
import { ListFilterPipe } from 'src/app/shared/filter/list-filter.pipe';

@Component({
  selector: 'app-es-index',
  templateUrl: './es-index.component.html',
  styleUrls: ['./es-index.component.scss']
})
export class EsIndexComponent implements OnInit {

  configFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  
  private listOfProjectsEsConfig: ProjectsEsConfig[]=[];
  private listOfProjectsRdbmsConfig: ProjectsRdbmsConfig[]=[];
  private listOfSchema:any;
  constructor(private _formBuilder: FormBuilder,
  private readonly esindexHttpService: EsIndexHttpService,
  private readonly listFilter:ListFilterPipe
  ) { }

  ngOnInit() {
    this.configFormGroup = this._formBuilder.group({
      serverConnectionUrl: ['', Validators.required],
      userName:[{value: '', disabled: true}],
      esPort:[{value: '', disabled: true}],
      rdbmsUser:[],
      esConnectionUrl:[],
      RdbmsSchema:[],
      rdbmsPort:[],
      connectionType:[]

    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.loaddStaticData();
    
  }

  loaddStaticData(){
    this.esindexHttpService.findEsConnectionUrls().subscribe(
      response =>{
        this.listOfProjectsEsConfig = response;
      }
    );

    this.esindexHttpService.findRdbmsConnectionUrls().subscribe(
      response =>{
        this.listOfProjectsRdbmsConfig = response;
      }
    );
   }
   serverConnectionUrlChange(event){
    const object =  this.listFilter.transform(this.listOfProjectsRdbmsConfig,'serverConnectionUrl',event.value)
    this.configFormGroup.get('userName').setValue(object[0].userName);
    this.configFormGroup.get('rdbmsPort').setValue(object[0].port);
    this.configFormGroup.get('connectionType').setValue(object[0].connectionType);
    this.loadSchema();
   }

   esConnectionUrlChange(event){
    const object =  this.listFilter.transform(this.listOfProjectsEsConfig,'ipAddress',event.value)
    this.configFormGroup.get('esPort').setValue(object[0].port);


   }
   loadSchema(){
    this.esindexHttpService.fetchSchema(this.configFormGroup.value).subscribe(
      response =>{
        
        this.listOfSchema = response.schemaDetails;
      }
    );

   }

   onNextButtonClick() {
  //   if (this.serverDetailForm.valid) {
  //     this.changeTabIndex();
  //     this.serverDetailForm.controls['selectedDatabase'].setValue(this.serverDetailForm.controls['schema'].value);
  //     this.userDetailService.fetchTableMetadata(this.serverDetailForm.value).subscribe(
  //         response => {
  //             this.checkListProvider.setTableMetadataAsDataSource(response.tableDetails); 
  //         }, error => {

  //             this.snackBar.open('invalid error.', 'Dismiss', { duration: 8000 });
  //         }
  //     )
  // } else {
  //     this.snackBar.open("invalid", 'Dismiss', { duration: 8000 });
  // }
    
  }
}


