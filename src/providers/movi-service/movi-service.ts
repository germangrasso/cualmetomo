import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoviServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MoviServiceProvider {

  constructor(public http: Http) {
    console.log('Hello MoviServiceProvider Provider');
  }

  get(searchPhrase) {
    return new Promise(resolve => {
      this.http.get(`http://ws.rosario.gov.ar/ubicaciones/public/geojson/ubicaciones/all/all/${searchPhrase}/true`).subscribe(res => {
        return resolve(res.json());
      })
    })
  }

}
