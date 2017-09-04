import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewTravel } from '../new-travel/new-travel';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  travels = [];

  constructor(public navCtrl: NavController, private storage: Storage) {

  }

  ionViewDidEnter() {
    this.travels = [];

    this.storage.forEach(x => {
        this.travels.push(x);
    });
  }

  travelSelected(travel){

  }

  addTravel(){
     this.navCtrl.push(NewTravel);
  }

}
