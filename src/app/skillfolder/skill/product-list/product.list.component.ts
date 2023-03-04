import{ Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product} from '../../product'; 
import { CartService } from '../../cart.service';
@Component({
    selector:'app-product-list', 
    templateUrl:'./product-list.component.html', 
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent { 

   products: Product[] = [];

   constructor(private cartService: CartService) {}
   ngOnInit(): void  {
    this.getProducts(); 
   }

   getProducts(): void{
    this.cartService.getProducts()
    .subscribe(products => this.products = products);
   }
   

    share() {
        window.alert('The product has been shared!');
    }
    onNotify() {
        window.alert('You will be notified when the product goes on sale')
    }
}