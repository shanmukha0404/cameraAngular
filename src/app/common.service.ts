import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  _url ="http://localhost:3000/itemList";
  _url1 ="http://localhost:3000/cart";

  constructor(private _http:HttpClient) { }

  getAllItems()
  {
    return this._http.get(this._url);
  }

  getAllCartItems()
  {
    return this._http.get(this._url1);
  }

display(id)
{
  return this._http.get('http://localhost:3000/itemList/'+id);
}


cartData(data)
{
  this._http.post(this._url1,data).subscribe();
  console.log(data);
}

deleteCart(d)
{
  return this._http.delete(this._url1+"/"+d.id);
}


}
