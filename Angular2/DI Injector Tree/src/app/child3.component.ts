import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { SharedService } from './Shared.service';


@Component({
  selector: 'child3-component',
  templateUrl: './child3.component.html',
  providers :[]
})

export class Child3Component
{

   sharedValue;

   constructor(private sharedService:SharedService){
     this.sharedValue=sharedService.getSharedValue();
     console.log('Child-3 ' + this.sharedValue.toString());
   }
   
}
