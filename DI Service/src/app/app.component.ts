import { Component } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from './product';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*providers: [ProductService,LoggerService]*/
  providers :[{ provide: ProductService, useClass: ProductService },
              { provide: LoggerService, useClass: LoggerService },
              ]
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

