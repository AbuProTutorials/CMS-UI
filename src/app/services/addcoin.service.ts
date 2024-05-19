import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Addcoin } from '../models/addcoin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddcoinService {

  constructor(private http:HttpClient) { }
  baseURL=environment.baseUrl

  AddCoins(addcoin:Addcoin):Observable<any>{
    return this.http.put<any>(this.baseURL+"/Student/AddCoins",addcoin)
  }
}
