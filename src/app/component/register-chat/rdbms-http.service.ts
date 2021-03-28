import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class ChatHttpService {
  
  //schema:SchemaDetails=null;
  
  constructor(private readonly http: HttpClient) {
  }

  public saveMessage(data):Observable<any>{
      return this.http.post("http://localhost:8080/saveChat",data);
  }
 
  public getAllMessage(teamId):Observable<any>{
    return this.http.get("http://localhost:8080/getChat/teamId");
}
}

