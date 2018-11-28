import { Component } from '@angular/core';

import { SharedService} from './Shared.service';

@Component({
  selector: 'parent2-component',
  templateUrl: './parent2.component.html',
  providers :[SharedService]
})
export class Parent2Component
{

   sharedValue;

   constructor(private sharedService:SharedService){
     this.sharedValue=sharedService.getSharedValue();
     console.log('Parent-2 ' + this.sharedValue.toString());
   }
   
}

