import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MoviServiceProvider } from '../../providers/movi-service/movi-service';

@Component({
  selector: 'new-travel',
  templateUrl: 'new-travel.html'
})
export class NewTravel {

  name: string;
  locationFrom: string;
  locationTo: string;

  constructor(public navCtrl: NavController,
    private storage: Storage,
    public alertCtrl: AlertController,
    private moviService: MoviServiceProvider) {

  }

  saveTravel() {
    if (this.name.trim() == '') {
      let alert = this.alertCtrl.create({
        title: 'Nuevo Recorrido',
        subTitle: 'Ingrese nombre del recorrido',
        buttons: ['Aceptar']
      });
      alert.present();

      return;
    }
    this.storage.set(new Date().getTime().toString(), { name: this.name });
    this.navCtrl.pop();
  }

  search(event) {
    this.moviService.get(this.locationFrom).then((response) => {

      debugger
    });
  }

}
