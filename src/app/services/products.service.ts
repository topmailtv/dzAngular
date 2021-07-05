import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Product } from '../interfaces/product';

const STORAGE_KEY = 'local_products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {}

  public saveToLocalStorage(product: Product): void {
    const tmpProdList = this.storage.get(STORAGE_KEY) || [];
    tmpProdList.push(product);
    this.storage.set(STORAGE_KEY, tmpProdList);
    // console.log(this.storage.get(STORAGE_KEY) || 'Local storage is empty')
  }
  public getFormLocalStorage(): [] {
    const currentToDoList = this.storage.get(STORAGE_KEY) || [];
    return currentToDoList;
  }

  public clearLocalStrage() {
    const currentToDoList = this.storage.clear();
    // console.log('LocalStorage is cleared');
  }
 
}
