import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselBasic} from './slideshow/carousel-basic'
import { HomeComponent } from './home/home.component';
import { skillModule } from './skillfolder/skill.module';
import { Router } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
     
    
   NgbCarouselBasic,
    HomeComponent, 
  
  ],
  imports: [
    BrowserModule,
    skillModule,
  
    AppRoutingModule,
   NgbModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router) {}
 }
