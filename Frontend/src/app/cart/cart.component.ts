import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(
    private cart: CartService,
    private formBuilder: FormBuilder
  ) {

    this.items = this.cart.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    })
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    this.items = this.cart.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit() {
  }

}
