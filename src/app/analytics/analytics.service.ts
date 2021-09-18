import { Injectable } from '@angular/core';
import {HttpService} from "../http.service";
import {Subject, Subscription} from "rxjs";
import {Forest, ForestService} from '../forest/forest.service';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  table = new Subject<string>();
  params = {
    forest: 10,
    rows: 'area',
    columns: 'species',
    format: 'json',
  }

  constructor(private httpService: HttpService, private forestService: ForestService) {
  }

  getTable(columns?: string, rows?: string): void {

    const selectedForest = this.forestService.lastSelectedForest;
    if(selectedForest == undefined)
      return;
    const forestId = selectedForest.id.toString();

    const formData = new FormData()
    formData.append('forest_id', forestId);
    formData.append('rows', rows ?? 'area');
    formData.append('columns', columns ?? 'species');
    formData.append('format', 'html');

    this.httpService.post('analytics', formData).subscribe(data => this.table.next(data));
  }

}
