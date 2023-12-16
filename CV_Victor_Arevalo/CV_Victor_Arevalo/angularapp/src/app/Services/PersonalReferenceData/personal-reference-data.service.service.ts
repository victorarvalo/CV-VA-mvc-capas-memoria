import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalReferenceDataServiceService {

  private myAppUrl = "https://localhost:7206/"
  private myApiUrl = "api/PersonalReference"
  constructor(private http: HttpClient) { }

  getListPersonalReferenceData():Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }
}
