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
  public lastSelectedForest?: Forest;
  constructor(private httpService: HttpService) { }

  getAll(): void {
    this.httpService.get('forests/').subscribe(responseData => {
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
    this.lastSelectedForest = selectedForest
  }

  generateForest(forestName: string): void {
    const formData = new FormData()
    formData.append('name', forestName)
    this.httpService.post('seeds', formData).subscribe(_ => this.getAll());
  }

  deleteAll(): void {
      this.httpService.get('drop').subscribe(_ => this.getAll(), error => console.log(error))
  }

}
