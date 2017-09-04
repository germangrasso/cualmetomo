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

    travels: any[];

  constructor(public navCtrl: NavController, private storage: Storage, private popoverCtrl: PopoverController ) {

  }

  ionViewDidEnter() {
    this.travels = [];

    this.storage.forEach((value, key) => {
        this.travels.push({key: key, value: value});
    });

  }
  travelSelected(travel){
    console.log("Travel selected!");
    this.navCtrl.push(TravelOptions, {travel: travel});
  }

  goToMyTravels(){
       this.navCtrl.push(MyTravels);
  }

  addTravel(){
     this.navCtrl.push(NewTravel);
  }

  presentPopover(ev, travelKey,travelIndex) {
      let popover = this.popoverCtrl.create(PopoverView, { deleteTravel: function(){
          this.storage.remove(travelKey);
          this.travels.splice(travelIndex, 1);
          popover.dismiss();
      }.bind(this)} );

      popover.present({
          ev: ev
      });
  }
}