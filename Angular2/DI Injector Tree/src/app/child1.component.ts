import { Component } from '@angular/core';

import { SharedService} from './Shared.service';

@Component({
  selector: 'child1-component',
  templateUrl: './child1.component.html',
  providers :[]
})
export class Child1Component
{

   sharedValue;

   constructor(private sharedService:SharedService){
     this.sharedValue=sharedService.getSharedValue();
     console.log('Child-1 ' + this.sharedValue.toString());
   }
   
}

