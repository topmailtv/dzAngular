import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-new-prod',
  templateUrl: './new-prod.component.html',
  styleUrls: ['./new-prod.component.scss']
})
export class NewProdComponent implements OnInit {

  result: Product = {name:'LG', model:'Qweasd'};

  constructor(private data: ProductsService) { }

  ngOnInit() {
    const newProduct: Product = {name:'Samsung', model:'Qwerty100'};
    this.data.saveToLocalStorage(newProduct);
  }
 
  addProduct(arg1:string, arg2:string) { 
  this.result.name = arg1;
  this.result.model = arg2;
  this.data.saveToLocalStorage(this.result);
  // console.log(this.result)
  }
}
