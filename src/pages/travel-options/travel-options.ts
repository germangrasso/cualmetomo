import { Component } from '@angular/core';
import { NavController, NavParams, Loading } from 'ionic-angular';
import { MoviServiceProvider } from '../../providers/movi-service/movi-service';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'travel-options',
  templateUrl: 'travel-options.html'
})
export class TravelOptions {

  travel: any;
  loading: Loading;
  travelOptions: any[];

  private moviService: MoviServiceProvider;

  constructor(public navCtrl: NavController, private navParms: NavParams, private moviSrv: MoviServiceProvider, public loadingCtrl: LoadingController) {
    this.travel = this.navParms.get('travel').value;
    this.moviService = moviSrv;
  }

  ionViewDidEnter() {
    this.loading = this.loadingCtrl.create({
      content: "Buscando colectivos ..."
    });

    this.loading.present();

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

    this.moviService.getTravelOptions(travelOptionsRequest).then(response => this.updateList(response));
  }
  

  updateList(response) {
    this.travelOptions = response.recorridos;
    this.loading.dismiss();
  }

}
