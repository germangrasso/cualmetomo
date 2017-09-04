import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, private storage: Storage, private moviService: MoviServiceProvider) {
     
  }

  saveTravel() {
      this.storage.set(new Date().getTime().toString(), {name: this.name});
      this.navCtrl.pop();
  }

  search(event) {
    this.moviService.get(this.locationFrom).then((response) => {
      
      debugger
    });
  }

}
