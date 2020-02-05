import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor() { }

  ngOnInit() {
  }

  addCart() {
    console.log('Añadir al carrito');
    this.productClicked.emit(this.product.id);
  }

}
