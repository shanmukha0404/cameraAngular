import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  _url ="http://localhost:3000/itemList";

  constructor(private _http:HttpClient) { }

  getAllItems()
  {
    return this._http.get(this._url);
  }


display(id)
{
  return this._http.get('http://localhost:3000/itemList/'+id);
}

}
