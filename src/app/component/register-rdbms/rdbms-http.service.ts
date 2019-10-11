import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerDetails } from '../../entity/ServerDetails';
// import { SchemaDetails } from './SchemaDetails.interface';
// import { ServerDetails } from './ServerDetails';
// import { ElasticSearchIndex } from './ElasticSearchIndex';


@Injectable()
export class RdbmsHttpService {
  
  //schema:SchemaDetails=null;
  
  constructor(private readonly http: HttpClient) {
  }

  // fetchSqlServerDetails(serverDetails : ServerDetails):Observable<any>{
  //   return this.http.post("http://localhost:8080/server/config",serverDetails);
  // }
  
  // fetchTableMetadata(serverDetails : ServerDetails):Observable<any>{
  //   return this.http.post("http://localhost:8080/server/config/tables",serverDetails);
  // }

  public registerRdbmsDatabase(serverDetails : ServerDetails):Observable<any>{
      return this.http.post("http://localhost:8080/server/config/rdbms",serverDetails);
  }
 
  public findAllRdbmsServerDetails():Observable<any>{
    return this.http.get("http://localhost:8080/server/config/rdbms");
}
}

