import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbCarouselBasic } from './carousel-basic';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbCarouselBasic],
  exports: [NgbCarouselBasic],
  bootstrap: [NgbCarouselBasic]
})
export class NgbCarouselBasicModule {}
