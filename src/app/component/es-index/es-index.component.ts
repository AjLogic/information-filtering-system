import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { EsIndexHttpService } from './es-index-http.service';
import { ProjectsEsConfig } from 'src/app/entity/projectsEsConfig';
import { ProjectsRdbmsConfig } from 'src/app/entity/projectsRdbmsConfig';
import { Observable } from 'rxjs';
import { ListFilterPipe } from 'src/app/shared/filter/list-filter.pipe';
import { ChecklistDatabase } from '../rdbms-metadata-tree/ChecklistDatabase';

@Component({
  selector: 'app-es-index',
  templateUrl: './es-index.component.html',
  styleUrls: ['./es-index.component.scss']
})
export class EsIndexComponent implements OnInit {

  configFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
   listOfProjectsEsConfig: ProjectsEsConfig[] = [];
   listOfProjectsRdbmsConfig: ProjectsRdbmsConfig[] = [];
   listOfSchema: any;
  constructor(private _formBuilder: FormBuilder,
    private readonly esindexHttpService: EsIndexHttpService,
    private readonly listFilter: ListFilterPipe,
    private readonly checkListProvider: ChecklistDatabase,
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.configFormGroup = this._formBuilder.group({
      serverConnectionUrl: ['', Validators.required],
      userName: [{ value: '', disabled: true }],
      esPort: [{ value: '', disabled: true }],
      rdbmsUser: [],
      esConnectionUrl: [],
      rdbmsDatabase: [],
      rdbmsPort: [],
      connectionType: []

    });
    this.secondFormGroup = this._formBuilder.group({
      esIndexs: new FormArray([])
    });
    this.loaddStaticData();

  }

  loaddStaticData() {
    this.esindexHttpService.findEsConnectionUrls().subscribe(
      response => {
        this.listOfProjectsEsConfig = response;
      }
    );

    this.esindexHttpService.findRdbmsConnectionUrls().subscribe(
      response => {
        this.listOfProjectsRdbmsConfig = response;
      }
    );
  }
  serverConnectionUrlChange(event) {
    const object = this.listFilter.transform(this.listOfProjectsRdbmsConfig, 'serverConnectionUrl', event.value)
    this.configFormGroup.get('userName').setValue(object[0].userName);
    this.configFormGroup.get('rdbmsPort').setValue(object[0].port);
    this.configFormGroup.get('connectionType').setValue(object[0].connectionType);
    this.loadSchema();
  }

  esConnectionUrlChange(event) {
    const object = this.listFilter.transform(this.listOfProjectsEsConfig, 'ipAddress', event.value)
    this.configFormGroup.get('esPort').setValue(object[0].port);


  }
  loadSchema() {
    this.esindexHttpService.fetchSchema(this.configFormGroup.value).subscribe(
      response => {
        this.listOfSchema = response.schemaDetails;
      }
    );

  }

  onNextButtonClick() {
    this.esindexHttpService.fetchTableMetadata(this.configFormGroup.value).subscribe(
      response => {
        this.checkListProvider.setTableMetadataAsDataSource(response.tableDetails);
      });

    const esIndexs = this.secondFormGroup.get('esIndexs') as FormArray;
  }

  selectionchange(value) {

    const esIndexs = this.secondFormGroup.get('esIndexs') as FormArray;
    esIndexs.push(this.formBuilder.group({
      parent: [value.selectedParent],
      child: [value.child]
    }));
  }
}


