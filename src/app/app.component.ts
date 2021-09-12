import {Component, OnInit} from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'data-forest-frontend';

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.fetchData();
  }
}
