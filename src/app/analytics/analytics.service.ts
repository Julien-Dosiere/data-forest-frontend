import { Injectable } from '@angular/core';
import {HttpService} from "../http.service";
import {Subject} from "rxjs";

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

  constructor(private httpService: HttpService) { }

  getTable(columns?: string, rows?: string): void {
    const formData = new FormData()
    formData.append('forest_id', '10');
    formData.append('rows', rows ?? 'area');
    formData.append('columns', columns ?? 'species');
    formData.append('format', 'html');

    this.httpService.post('analytics', formData).subscribe(data => this.table.next(data));
  }

}
