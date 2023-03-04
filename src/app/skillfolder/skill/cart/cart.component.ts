import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { Product } from '../../product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  total : number; 
  items : Product[] = [];
  
 
    

  constructor(
    private cartService: CartService,

    
  ) { }
 
  
  ngOnInit(): void{ 
   
    this.cartService.itemsObservable1.subscribe((res) => {
      this.items = res;
    }); 
    this.cartService.totalOberservable.subscribe((res) => {
      this.total = res; 
    }); 
  }
  onSubmit(): void {
    // Process checkout data here
     this.cartService.clearCart();
    window.alert('Thank you for viewing my Demo');
   
  }

  onRemove(index:number){
    this.cartService.removeFromCart(index); 
  }
}
  


