import { Component, OnDestroy, OnInit } from '@angular/core';
import {Forest, ForestService} from '../forest/forest.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  selectedForestSub!: Subscription;
  selectedForest: Forest | null = null;


  constructor(private forestService: ForestService) { }

  ngOnInit(): void {
    this.selectedForestSub = this.forestService.selectedForest.subscribe(forest => this.selectedForest = forest)
  }

  ngOnDestroy(): void {
    this.selectedForestSub.unsubscribe();
  }

}
