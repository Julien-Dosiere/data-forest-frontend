import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {Forest, ForestService} from "./forest.service";

@Component({
  selector: 'app-forest',
  templateUrl: './forest.component.html',
  styleUrls: ['./forest.component.scss']
})
export class ForestComponent implements OnInit {
  forestsSub?: Subscription;
  forests?: Forest[];
  constructor(private forestService: ForestService, private router: Router) { }

  ngOnInit(): void {
    this.forestService.getAll();
    this.forestsSub = this.forestService.forests.subscribe(forests => {
      this.forests = forests
    });
  }

  selectForests(forestId: number): void {
    this.forestService.selectForest(forestId);
    this.router.navigate(['analytics'])
  }


}
