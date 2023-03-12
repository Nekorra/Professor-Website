import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http: HttpClient) {}

  getData(url: string): Observable<any> {
    try {
      return this.http.get(`${url}`);
    } catch (error) {
      console.log("An error occured while fetching data: ", error);
    }
    return throwError("error fetching data");
  }

}
