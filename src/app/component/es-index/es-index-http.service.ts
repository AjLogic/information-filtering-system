import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerDetails } from '../../entity/ServerDetails';
import { EsConfig } from 'src/app/entity/elasticSearchConfig';
import { ProjectsRdbmsConfig } from 'src/app/entity/projectsRdbmsConfig';
// import { SchemaDetails } from './SchemaDetails.interface';
// import { ServerDetails } from './ServerDetails';
// import { ElasticSearchIndex } from './ElasticSearchIndex';


@Injectable()
export class EsIndexHttpService {
  
  //schema:SchemaDetails=null;
  
  constructor(private readonly http: HttpClient) {
  }

  public findEsConnectionUrls():Observable<any>{
      return this.http.get("http://localhost:8080/list/es/connection");
  }
 
  public findRdbmsConnectionUrls():Observable<any>{
    
    return this.http.get("http://localhost:8080/list/rdbms/connection");
  }

  fetchSchema(projectsRdbmsConfig : any):Observable<any>{
    return this.http.post("http://localhost:8080/server/config",projectsRdbmsConfig);
  }

  fetchTableMetadata(serverDetails : ServerDetails):Observable<any>{
    return this.http.post("http://localhost:8080/server/config/tables",serverDetails);
  }
}

