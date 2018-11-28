import { Component } from '@angular/core';

import { SharedService} from './Shared.service';

@Component({
  selector: 'parent1-component',
  templateUrl: './parent1.component.html',
  providers :[SharedService]  
})
export class Parent1Component
{
   sharedValue;

   constructor(private sharedService:SharedService){
     this.sharedValue=sharedService.getSharedValue();
     console.log('Parent-1 ' + this.sharedValue.toString());
   }
}


