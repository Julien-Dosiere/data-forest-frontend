import {Component, OnInit, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';
import {AnalyticsService} from "./analytics.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  tableSub!: Subscription;
  table?: string;
  errorMessage?: string | null;
  dataTypes = [
    'age',
    'area',
    'size',
    'species',
    'state',
  ]
  @ViewChild('form') form!: NgForm;



  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit(): void {
    this.tableSub = this.analyticsService.table.subscribe(table => this.table = table);
    this.analyticsService.getTable();

  }

  onSubmit(): void {
    const columns = this.form.value.columns;
    const rows = this.form.value.rows;
    if (columns === '' || rows === ''){
      this.errorMessage = "Select a data type for rows and columns";
    }
    else if (columns === rows){
      this.errorMessage = "Select different data types for rows and columns";
    }
    else{
      this.analyticsService.getTable(columns, rows)
      this.errorMessage = null;
    }


  }

}
