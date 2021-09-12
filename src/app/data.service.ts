import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  error = new Subject();

  apiURL = 'https://jd-data-forest.herokuapp.com/forests/'
  constructor(private httpClient: HttpClient) { }

  fetchData() {
    console.log('fetching..');
    const datas = this.httpClient
      .get<any>(
      this.apiURL,
    )
      .subscribe(responseData => console.log(responseData), error => {
        console.log('error !');

        this.error.next(error.message);
    });
    //console.log(datas);
  }
}
