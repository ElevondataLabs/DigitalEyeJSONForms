import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  public apiUrl = 'https://deyesinspectionservice-dq5rvo4msq-el.a.run.app/';
  private headersOption = new HttpHeaders();

  constructor(public http: HttpClient) {

    this.headersOption.append('Content-Type', 'application/json');
    this.headersOption.append('Access-Control-Allow-Headers', 'Content-Type');
    this.headersOption.append('Access-Control-Allow-Origin', '*');

   }

   postData(url: any, data: any): Observable<any> {
    url = this.apiUrl + url;
    console.log(url, JSON.stringify(data));
    return this.http.post(url, data, { headers: this.headersOption })
      .pipe(map(results => {
        return results;
      }, (err: { Message: any; }) => {
        alert(err.Message);
      }));
  }

}
