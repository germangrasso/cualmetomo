import { Component } from '@angular/core';
import { NavController, Events,NavParams,  Popover, PopoverController } from 'ionic-angular';
import { NewTravel } from '../new-travel/new-travel';
import { PopoverView } from '../popover-view/popover-view'
import { TravelOptions } from '../travel-options/travel-options'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'my-travels',
  templateUrl: 'my-travels.html'
})
export class MyTravels {

  travels = [];

  constructor(public navCtrl: NavController, private storage: Storage, private popoverCtrl: PopoverController ) {

  }

  ionViewDidEnter() {
    this.travels = [];

    this.storage.forEach((value, key) => {
        this.travels.push({key: key, value: value});
    });

  }
  travelSelected(travel){
      debugger;
      this.navCtrl.push(TravelOptions, {travel: travel});
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