import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalDataServiceService {

  private myAppUrl = "https://hvvamemoria.azurewebsites.net/"
  private myApiUrl = "api/PersonalData"
  constructor(private http: HttpClient) { }

  getListPersonalData():Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }
}