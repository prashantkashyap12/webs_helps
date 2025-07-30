import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

   constructor(private _http:HttpClient, private _common:CommonService) { }
    donateLs():Observable<any>{
      let url = this._common.setBaseUrl() + "getDontLst";
      return this._http.get(url);
    }
    donateDetails(dontId:any):Observable<any>{
      let url = this._common.setBaseUrl()+ `getDonateDetails?doantTran=${dontId}`;
      return this._http.get(url);
    }
}
