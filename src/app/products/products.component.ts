import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../services/products/products.service';
import { Product } from '../components/product/product.module';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }
}