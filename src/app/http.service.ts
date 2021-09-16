import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

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

    //console.log(datas);
  }
}
