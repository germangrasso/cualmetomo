import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'new-travel',
  templateUrl: 'new-travel.html'
})
export class NewTravel {

  name: string;

  constructor(public navCtrl: NavController, private storage: Storage) {
     
  }

  saveTravel(){
      this.storage.set(new Date().getTime().toString(), {name: this.name});
      this.navCtrl.pop();
  }

}
