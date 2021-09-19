import {Component, OnInit} from '@angular/core';
import { DataService } from './data.service';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'data-forest-frontend';

  constructor(private titleService: Title) {
    this.titleService.setTitle("Data Forest");

  }



  ngOnInit() {
    // this.dataService.fetchData();
  }
}
