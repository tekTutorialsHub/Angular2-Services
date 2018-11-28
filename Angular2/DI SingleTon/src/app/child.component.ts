import { Component } from '@angular/core';

import { ProductService } from './product.service';
import { FakeProductService } from './fake-product.service';

import { Product } from './product';



@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',

})
export class ChildComponent
{

   products:Product[];
   
   constructor(private productService:ProductService){
   }
   
   getProducts() {
     this.products=this.productService.getProducts();
   }
  
}

