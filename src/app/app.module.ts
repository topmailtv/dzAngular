import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewProdComponent } from './conponents/new-prod/new-prod.component';
import { ProdListComponent } from './conponents/prod-list/prod-list.component';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    NewProdComponent,
    ProdListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
