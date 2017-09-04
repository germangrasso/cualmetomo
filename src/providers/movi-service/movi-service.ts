import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
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

  getTravelOptions(travelOptionsRequest) {
    let headers = new Headers();
  //  headers.append("Accept", 'application/json');
  
  //headers.append('Access-Control-Allow-Headers', 'Content-type' );
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });

    return new Promise(resolve => {
      this.http.post(`http://infomapa.rosario.gov.ar/emapa/tup/comoLLego/buscarTup.htm`, travelOptionsRequest)
      .subscribe(res => {
        debugger;
        return resolve(res.json());
      }, error => { console.log("Error obteniendo posibles recorridos", error) })
    });

  }

}
