import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogListService {

  constructor(private _http:HttpClient, private _common:CommonService) { }
  blogLs():Observable<any>{
    let url = this._common.setBaseUrl()+ "blogList";
    return this._http.get(url);
  }
  blogDetails(blogTran:any):Observable<any>{
    let url = this._common.setBaseUrl()+ `blogDetRec?blogTran=${blogTran}`;
    return this._http.get(url);
  }
  
}
