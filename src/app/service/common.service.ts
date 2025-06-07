import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseurl } from '../interface/baseurl'; 

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }

    setBaseUrl():string{
        var url = new baseurl();
        return url.baseUrl;
    }
  
}
