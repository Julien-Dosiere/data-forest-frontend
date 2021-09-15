import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ForestComponent } from './forest/forest.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MapComponent } from './map/map.component';
import { ManageComponent } from './manage/manage.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [
  {path: '', component: ForestComponent, pathMatch:'full'},
  {path: 'forest', component: ForestComponent, children: [
      // {path: ':id/:name', component: UserComponent},
    ]},
  {path: 'analytics', component: AnalyticsComponent},
  {path: 'map', component: MapComponent},
  {path: 'manage', component: ManageComponent},
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found'}},
  {path: '**', redirectTo: '/not-found'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, /*{useHash: true}*/)
  ],
  exports: [RouterModule],
  declarations: [
    ForestComponent,
    AnalyticsComponent,
    MapComponent,
    ManageComponent,
    ErrorPageComponent
  ]
})

export class AppRoutingModule{

}
