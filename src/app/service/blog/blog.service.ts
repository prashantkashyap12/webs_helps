import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class BlogListService {

  constructor(private _http:HttpClient, private _common:CommonService) { }

  blogLs(){
    let url = this._common.setBaseUrl() + "Api_path";
    return this._http.get(url);
  }
  blogDetails(){
    let url = this._common.setBaseUrl() + "Api_path";
    return this._http.get(url);
  }
  
}
