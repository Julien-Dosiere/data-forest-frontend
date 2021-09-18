import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  error = new Subject();

  constructor(private httpClient: HttpClient) { }

  get(URN: string = '') {
    console.log('fetching..');
    return this.httpClient
      .get<any>(
        environment.API_URL + URN,

      )
  }

  post(URN: string = '', formData: FormData) {
    console.log('fetching..');
    console.log(formData.get('rows'));


    return this.httpClient
      .post(
        environment.API_URL + URN,
        formData,
        {
          responseType: 'text',}
      )
  }


}
