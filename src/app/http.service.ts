import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  error = new Subject();

  API_URL = 'https://jd-data-forest.herokuapp.com/'
  constructor(private httpClient: HttpClient) { }

  get(URN: string = '') {
    console.log('fetching..');
    return this.httpClient
      .get<any>(
        this.API_URL + URN,
      )
  }

  post(URN: string = '', formData: FormData) {
    console.log('fetching..');
    console.log(formData.get('rows'));


    return this.httpClient
      .post(
        this.API_URL + URN,
        formData,
        {
          responseType: 'text',}
      )
  }


}
