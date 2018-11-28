import { Component } from '@angular/core';

import { ProductService } from './product.service';
import { NewProductService } from './newproduct.service';
import { Product } from './product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers :[{ provide: ProductService, useExisting: NewProductService },
              { provide: NewProductService, useClass: NewProductService }],
})
export class AppComponent
{

   products:Product[];
   
   constructor(private productService:ProductService){
   }
   
   getProducts() {
     this.products=this.productService.getProducts();
   }
  
}

