import { Component } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent
{

   products:Product[];
   productService;

   constructor(){
     this.productService=new ProductService();
   }

   getProducts() {
     
     this.products=this.productService.getProducts();
   }
  
}




