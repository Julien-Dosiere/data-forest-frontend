import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import {BehaviorSubject, Subject} from "rxjs";


export interface Forest {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ForestService {
  forests = new BehaviorSubject<Forest[]>([]);
  selectedForest = new Subject<Forest>();
  constructor(private httpService: HttpService) { }

  getAll(): void {
    this.httpService.get('forests/').subscribe(responseData => {
      console.log(responseData);
      this.forests.next(responseData);
    }, error => {
      console.log('http error !');
      console.log(error);
    });
  }

  selectForest(forestId: number): void {
    const forestList: Forest[] = this.forests.getValue();
    const selectedForest = forestList.find(forest => forest.id === forestId);
    this.selectedForest.next(selectedForest);
  }


}
