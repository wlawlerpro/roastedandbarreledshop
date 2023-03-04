import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { TopBarComponent } from './skill/top-bar/top-bar.component';
import { ProductListComponent } from './skill/product-list/product.list.component';
import { ProductDetailsComponent } from './skill/product-details/product-details.component';
import { CartComponent } from './skill/cart/cart.component';
import { SkillComponent } from './skill/skill.component';
import { Routes} from '@angular/router';
import { CartService } from './cart.service';


const skillRoutes: Routes = [

  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'cart', component: CartComponent}, 
  {path: 'skill', component: ProductListComponent}
]


@NgModule({
  providers:[
    CartService
  ],
  
  declarations: [
    SkillComponent,
    TopBarComponent, 
    ProductListComponent,
    ProductDetailsComponent, 
    CartComponent],
  imports: [
    BrowserModule,
     NgbModule,
     CommonModule, 
     HttpClientModule,
    RouterModule.forChild(skillRoutes ), 
  ReactiveFormsModule
  ],

  exports: [SkillComponent, TopBarComponent, FormsModule,],
  bootstrap: [SkillComponent]
})
export class skillModule {}
