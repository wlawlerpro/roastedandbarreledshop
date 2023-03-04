import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import {Product  } from '../../product'; 
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 
  @Input() product: Product

  SKILL_ROUTE = '/skill'
  constructor(
    private route: ActivatedRoute, 
    private cartService: CartService, 
 
    ) { }

  ngOnInit(): void  {
   this.getProduct();
     
  }
  getProduct(): void {
 let id = +this.route.snapshot.paramMap.get('id');
  this.cartService.getProduct(id)
  .subscribe(product => this.product = product);
  console.log(id)
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!'); 
  }
  onBuy() {
    window.alert('Thank you for viewing my Demo');
  }
}
