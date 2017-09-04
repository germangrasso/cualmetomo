import { Component } from '@angular/core';
import { NavController, Events,NavParams,  Popover, PopoverController } from 'ionic-angular';
import { NewTravel } from '../new-travel/new-travel';
import { MyTravels } from '../my-travels/my-travels';
import { PopoverView } from '../popover-view/popover-view'
import { TravelOptions } from '../travel-options/travel-options'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private storage: Storage, private popoverCtrl: PopoverController ) {

  }

  goToMyTravels(){
       this.navCtrl.push(MyTravels);
  }
}