import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Product } from './product'
import { BehaviorSubject, Observable, of, } from 'rxjs';
import{ catchError, map, shareReplay, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsUrl = 'https://my-json-server.typicode.com/wlawlerpro/db/products'; 


constructor(
  private http: HttpClient,
 
) {}
private total = 0; 
private totalSubject$ = new BehaviorSubject<number>(this.total); 
public totalOberservable = this.totalSubject$.asObservable(); 
private  items : Product[] = []; 

private itemList$ = new BehaviorSubject<Product[]>(this.items); 
public itemsObservable1 = this.itemList$.asObservable();
  
  addToCart(item: Product): void {
    this.items.push(item);
    this.itemList$.next(this.items); 
    this.total = this.calculateTotal(); 
    this.totalSubject$.next(this.total);   
  }
  removeFromCart(index: number){
    this.items.splice(index,1)
    this.total = this.calculateTotal(); 
    this.totalSubject$.next(this.total)
  }
  getItems() {
    return this.itemList$.asObservable(); 
  }
  clearCart() {
    this.items = []; 
    return this.items;
  }
  private calculateTotal(): number {
    let total = 0; 
    this.items.forEach(
      (item: { price: number}) =>
      (total += item.price * 1)
    ); 
    return total; 
  }
 //Product List 
 
 getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.productsUrl)
  .pipe(
    tap(), 
  );
 }
//Product Details

getProduct(id: number): Observable<Product> {
  
  const url = `${this.productsUrl}/${id} `; 
  console.log(id)
  return this.http.get<Product>(url).pipe(
    catchError(this.handleError<Product>(`getHero id=${id}`))
  );}

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * 
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    private  handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
     

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

 
}





