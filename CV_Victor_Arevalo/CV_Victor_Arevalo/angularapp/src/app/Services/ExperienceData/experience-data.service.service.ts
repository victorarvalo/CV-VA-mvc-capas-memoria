import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class ExperienceDataServiceService {

  private myAppUrl = "https://hvvamemoria.azurewebsites.net/"
  private myApiUrl = "api/ExperienceData"
  constructor(private http: HttpClient) { }

  getListExperienceData():Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }
}
