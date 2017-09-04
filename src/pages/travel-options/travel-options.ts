import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MoviServiceProvider } from '../../providers/movi-service/movi-service';

@Component({
  selector: 'travel-options',
  templateUrl: 'travel-options.html'
})
export class TravelOptions {
  
  travel: any;

  travelOptions: any[];

  private moviService: MoviServiceProvider;

  constructor(public navCtrl: NavController, private navParms: NavParams, private moviSrv: MoviServiceProvider) {
    this.travel = this.navParms.get('travel').value;
    this.moviService = moviSrv;
  }

  ionViewDidEnter() {
    this.travelOptions = [];

    let travelOptionsRequest = {
      "origen": {
        "geoJson":{ "type": "Point", "coordinates": this.travel.locationFrom.geoJson }  
      },
      "destino": {
        "geoJson": { "type": "Point", "coordinates": this.travel.locationFrom.geoJson } 
      },
      "cantCuadras": 4
    }

    this.moviService.getTravelOptions(travelOptionsRequest).then(response => this.updateList(response))

  }

  updateList(response) {
    console.log("List updated with: ", response);
    this.travelOptions = response.recorridos;
  }
   
}
