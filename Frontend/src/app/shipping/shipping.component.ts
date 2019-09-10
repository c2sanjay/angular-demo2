import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  newTodo: string;
  todos: any;
  todoObj: any;

  shippingCosts;

  serverID: Number = 10;
  serverStatus: string = 'Offline';
  fullName: String = 'Sanjay';

  constructor(private cart: CartService) {

    this.newTodo = 'sanjay';
    this.todos = [];

    this.shippingCosts = this.cart.getShippingPrices();
    this.serverStatus = Math.random() > 1.0 ? 'Online' : 'Offline';
    console.log(this.serverStatus)
  }

  addTodo(event) {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    }
    this.todos.push(this.todoObj);
    this.newTodo = '';
    event.preventDefault();
  }


  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  deleteSelectedTodos() {
    //need ES5 to reverse loop in order to splice by index
    for (var i = (this.todos.length - 1); i >= 0; i--) {
      if (this.todos[i].completed) {
        this.todos.splice(i, 1);
      }
    }
  }
  ngOnInit() {
  }

  getServerStatus() {
    return this.serverStatus;

  }
  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }
}
