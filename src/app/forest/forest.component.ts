import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {Forest, ForestService} from "./forest.service";

@Component({
  selector: 'app-forest',
  templateUrl: './forest.component.html',
  styleUrls: ['./forest.component.scss']
})
export class ForestComponent implements OnInit {
  forestListSub?: Subscription;
  forests?: Forest[];
  constructor(private forestService: ForestService) { }

  ngOnInit(): void {
    this.forestService.getAll();
    this.forestListSub = this.forestService.forestslist.subscribe(forestList => {
      this.forests = forestList
    });
  }

}
