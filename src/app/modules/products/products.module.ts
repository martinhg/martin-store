import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './components/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    MaterialModule
  ]
})
export class ProductsModule { }
