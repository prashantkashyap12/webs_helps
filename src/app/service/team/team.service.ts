import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamListService {

  //  testSub = new Subject<any>();
   constructor(private _http:HttpClient, private _common:CommonService) { }
    TeamLs():Observable<any>{
      let url = this._common.setBaseUrl()+ "GetTeamList";
      return this._http.get(url);
    }
}