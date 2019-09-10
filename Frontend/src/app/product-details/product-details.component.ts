import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  products = products;

  constructor(
    private route: ActivatedRoute,
    private cart: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // this.products = products[+params.get('productId')];
      console.log(this.products)

    });
  }
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cart.addToCart(product);
  }

}
