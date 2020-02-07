import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MatPaginator } from '@angular/material/paginator';
import { Product } from 'src/app/shared/models/product.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  products: Product[] = [];
  count = 0;
  displayedColumns: string[] = ['id', 'title', 'units', 'actions'];
  dataSource = new MatTableDataSource<Product>(this.products);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.fetchProducts();
  }

  fetchProducts() {
    return this.productsService.getAllProducts()
    .subscribe( products => {
      this.products = products;
    });
  }

  addMoreProducts() {
    this.count += 1;
  }

}
