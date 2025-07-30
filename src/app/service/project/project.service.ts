import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {

   constructor(private _http:HttpClient, private _common:CommonService) { }
     projectLs():Observable<any>{
      let url = this._common.setBaseUrl()+ "getProjLs";
      let res = this._http.get(url);
      return res;
    }
    projectDetails(prjId:any):Observable<any>{
      let url = this._common.setBaseUrl()+ `GetDetailsProjId?ProjTran=${prjId}`;
      let res = this._http.get(url);
      return res;
    }
}
