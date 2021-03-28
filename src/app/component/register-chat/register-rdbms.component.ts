import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { RdbmsEntity } from './register-entity.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChatHttpService } from './rdbms-http.service'

@Component({
  selector: 'app-register-rdbms',
  templateUrl: './register-rdbms.component.html',
  styleUrls: ['./register-rdbms.component.scss']
})
export class RegisterRdbmsComponent implements OnInit  {

  
  selectedTeam:string;
  chatRoom:boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    public httpService: ChatHttpService
  ) { }

  ngOnInit() {
   
   
  }

  setTeam(value){
    
    this.selectedTeam = value.value;
  }

  moveTochatRoom(){
    this.chatRoom = true;
  }
}

