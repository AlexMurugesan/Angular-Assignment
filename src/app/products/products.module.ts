import { NgModule } from '@angular/core';
import { Routes} from '@angular/router';
import { RouterModule} from '@angular/router';
import { ProductlistComponent } from '../productlist/productlist.component';
import { DetailsComponent} from '../details/details.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: ':id', component: DetailsComponent},
  { path: '', component: ProductlistComponent }

];


@NgModule({
  declarations: [
    ProductlistComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { 
}
