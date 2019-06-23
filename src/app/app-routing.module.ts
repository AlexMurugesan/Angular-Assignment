import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule} from './home/home.module';
import { ProductsModule } from './products/products.module';
import { ProductlistComponent } from './productlist/productlist.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path: 'home', loadChildren: () => HomeModule},
  {path: 'products', loadChildren: () => ProductsModule}
  // { path: 'products', component: ProductlistComponent,
  //   children: [
  //     {path: ':id', component: DetailsComponent}
  //   ]
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
