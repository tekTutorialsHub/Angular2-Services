import { Component } from '@angular/core';

import { ProductService } from './product.service';
import { FakeProductService } from './fake-product.service';

import { Product } from './product';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*providers :[ProductService]*/
  /*providers :[{ provide: ProductService, useClass: ProductService }]*/
  /*providers :[{ provide: ProductService, useClass: FakeProductService }]*/
  providers :[ {provide:'USE_FAKE', useValue: true},
               {provide: ProductService, 
                useFactory:  (USE_FAKE) => 
                 
                 USE_FAKE ? new FakeProductService() : new ProductService(),
                 deps: ['USE_FAKE']
                }]
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

