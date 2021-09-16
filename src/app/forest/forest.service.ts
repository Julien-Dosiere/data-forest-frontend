import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import {BehaviorSubject} from "rxjs";


export interface Forest {
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class ForestService {
  forestslist = new BehaviorSubject<Forest[]>([]);
  constructor(private httpService: HttpService) { }

  getAll() {
    this.httpService.get('forests/').subscribe(responseData => {
      console.log(responseData);
      this.forestslist.next(responseData);
    }, error => {
      console.log('http error !');
      console.log(error);
    });
  }


}
