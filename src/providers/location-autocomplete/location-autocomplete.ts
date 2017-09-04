import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AutoCompleteService } from 'ionic2-auto-complete';

/*
  Generated class for the LocationAutoCompleteProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LocationAutoCompleteProvider implements AutoCompleteService
{
  labelAttribute = "name";

  constructor(public http: Http)
  {
    // console.log('Hello LocationAutoCompleteProvider Provider');
  }

  getResults(keyword: string)
  {
    return this.http.get(`http://ws.rosario.gov.ar/ubicaciones/public/geojson/ubicaciones/all/all/${keyword}/true`)
      .map(
      result =>
      {
        return result.json().features
          .filter(item => item.properties.subtipo == "DIRECCIÓN") 
          .map(item => { return { "name": item.properties.name, "id": item.properties.id.replace('<', '[').replace('>', ']'), "subtipo": item.properties.subtipo } });
      });
  }
}
