import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.scss']
})
export class ProdListComponent implements OnInit {
Products = [];
  constructor(private data: ProductsService) { }

  ngOnInit(): void {
    this.Products = this.data.getFormLocalStorage();
  }
  cleareStorage(){
    this.data.clearLocalStrage();
    this.getProducts();
  }
  getProducts() {
    this.Products = this.data.getFormLocalStorage();
  }
}
