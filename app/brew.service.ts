import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class BrewService {
  filter(arg0: (x: { brewery_type: any; }) => boolean) {
    throw new Error('Method not implemented.');
  }
  static brewery_type: string;

  constructor(private brew: HttpClient) { }

  
  getBeer(){
    return this.brew.get('https://api.openbrewerydb.org/breweries')
  }

  myMethod() {
    return console.log('Hey, what is up!');
  }
}
