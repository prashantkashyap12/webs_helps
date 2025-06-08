import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventListService {

   constructor(private _http:HttpClient, private _common:CommonService) { }
    eventLs():Observable<any>{
      let url = this._common.setBaseUrl()+ "/main";
      return this._http.get(url);
    }
    eventDetails():Observable<any>{
      let url = this._common.setBaseUrl()+ "/main";
      return this._http.get(url);event
    }
}
