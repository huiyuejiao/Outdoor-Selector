import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class HeroService {
  getHeroes() {
    return [
   'Project1',
'Project2',
 'Prioject3'
];
  }
  
}
