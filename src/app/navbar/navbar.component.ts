import { Component, OnInit } from '@angular/core';
import {Forest, ForestService} from '../forest/forest.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  selectedForestSub!: Subscription;
  selectedForest?: Forest;


  constructor(private forestService: ForestService) { }

  ngOnInit(): void {
    this.selectedForestSub = this.forestService.selectedForest.subscribe(forest => this.selectedForest = forest)
  }

}
