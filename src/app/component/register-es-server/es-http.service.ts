import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerDetails } from '../../entity/ServerDetails';
import { EsConfig } from 'src/app/entity/elasticSearchConfig';
// import { SchemaDetails } from './SchemaDetails.interface';
// import { ServerDetails } from './ServerDetails';
// import { ElasticSearchIndex } from './ElasticSearchIndex';


@Injectable()
export class EsConfigServerHttpService {
  
  //schema:SchemaDetails=null;
  
  constructor(private readonly http: HttpClient) {
  }

  public registerRdbmsDatabase(esConfig : EsConfig):Observable<any>{
      return this.http.post("http://localhost:8080/es/config/rdbms",esConfig);
  }
 

}

