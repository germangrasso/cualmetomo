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
    this.getData();
  }
  
  refresh(){
    this.getData();
  }

  getData(){
    this.loading = this.loadingCtrl.create({
      content: "Buscando colectivos ..."
    });

    this.loading.present();

    this.travelOptions = [];

    let travelOptionsRequest = {
      "origen": {
        "geoJson": JSON.stringify( { "type": "Point", "coordinates": JSON.parse(this.travel.locationFrom).geoJson } )  
      },
      "destino": {
        "geoJson": JSON.stringify( { "type": "Point", "coordinates": JSON.parse(this.travel.locationTo).geoJson } )
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
