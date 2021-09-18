import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {Forest, ForestService} from "./forest.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-forest',
  templateUrl: './forest.component.html',
  styleUrls: ['./forest.component.scss']
})
export class ForestComponent implements OnInit {
  forestsSub?: Subscription;
  forests?: Forest[];
  isLoading = false;
  @ViewChild('form') form!: NgForm;

  constructor(private forestService: ForestService, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.forestService.getAll();
    this.forestsSub = this.forestService.forests.subscribe(forests => {
      this.forests = forests
      this.isLoading = false;
    });
  }

  selectForests(forestId: number): void {
    this.forestService.selectForest(forestId);
    this.router.navigate(['analytics'])
  }

  onSubmit(): void{
    const forestName = this.form.value.name ?? 'unnamed forest';
    this.isLoading = true;
    this.forestService.generateForest(forestName);

  }


}
