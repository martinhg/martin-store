import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  product: Product;

  addressForm = this.fb.group({
    title: [null, Validators.required],
    category: [null, Validators.required],
    price: [null, Validators.required],
    description: [null, Validators.required],
    city: [null, Validators.required],
    province: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  provinces = [
    {name: 'Buenos Aires', abbreviation: 'BA'},
    {name: 'Catamarca', abbreviation: 'CT'},
    {name: 'Chaco', abbreviation: 'CC'},
    {name: 'Chubut', abbreviation: 'CH'},
    {name: 'Cordoba', abbreviation: 'CB'},
    {name: 'Corrientes', abbreviation: 'CN'},
    {name: 'Entre Rios', abbreviation: 'ER'},
    {name: 'Formosa', abbreviation: 'FM'},
    {name: 'Jujuy', abbreviation: 'JY'},
    {name: 'La Pampa', abbreviation: 'LP'},
    {name: 'La Rioja', abbreviation: 'LR'},
    {name: 'Mendoza', abbreviation: 'MZ'},
    {name: 'Misiones', abbreviation: 'MN'},
    {name: 'Neuquen', abbreviation: 'NQ'},
    {name: 'Rio Negro', abbreviation: 'RN'},
    {name: 'Salta', abbreviation: 'SA'},
    {name: 'San Juan', abbreviation: 'SJ'},
    {name: 'San Luis', abbreviation: 'SL'},
    {name: 'Santa Cruz', abbreviation: 'SC'},
    {name: 'Santa Fe', abbreviation: 'SF'},
    {name: 'Santiago del Estero', abbreviation: 'SE'},
    {name: 'Tierra del Fuego', abbreviation: 'TF'},
    {name: 'Tucuman', abbreviation: 'TM'}
  ];

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService
    ) {}

  onSubmit() {
    this.addProduct();
    alert('Thanks!');
  }

  addProduct() {
    const newProduct: Product = {
      id: '2323',
      image: '',
      title: 'Prueba martin',
      price: 3022200,
      description: 'nuevo producto'
    };
    this.productsService.createProduct(newProduct)
    .subscribe( product => {
      console.log(product)
      console.log('Añadido');
    });
  }
}
