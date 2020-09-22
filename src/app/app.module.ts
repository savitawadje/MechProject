import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { Product2Component } from './product2/product2.component';
import { Login1Component } from './login1/login1.component';
import { Login2Component } from './login2/login2.component';
import { FooterComponent } from './footer/footer.component';
import { Footer1Component } from './footer1/footer1.component';
import { HeaderComponent } from './header/header.component';
import { Header2Component } from './header2/header2.component';

import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Product2Component,
    Login1Component,
    Login2Component,
    FooterComponent,
    Footer1Component,
    HeaderComponent,
    Header2Component,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
