import { NgModule } from '@angular/core';
import { Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
import {Hc1Component} from '../hc1/hc1.component';

const routes: Routes = [
  { path: '', component: Hc1Component }
];

@NgModule({
  declarations: [
    Hc1Component
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
