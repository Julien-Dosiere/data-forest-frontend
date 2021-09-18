import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './navbar/navbar.component';
import {AppRoutingModule} from "./app-routing.module";
import {CommonModule} from "@angular/common";
import { ForestComponent } from './forest/forest.component';
import {AnalyticsComponent} from "./analytics/analytics.component";
import {MapComponent} from "./map/map.component";
import {ManageComponent} from "./manage/manage.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ForestComponent,
    AnalyticsComponent,
    MapComponent,
    ManageComponent,
    ErrorPageComponent,
    SpinnerComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
