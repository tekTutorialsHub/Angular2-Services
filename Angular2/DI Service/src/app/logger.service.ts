import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  log(message:any) {
    console.log(message);
  }
}
