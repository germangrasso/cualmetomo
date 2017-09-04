import { Component } from '@angular/core';
import { NavController, Events,NavParams,  Popover, PopoverController } from 'ionic-angular';
import { NewTravel } from '../new-travel/new-travel';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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


@Component({
    templateUrl: './popover.html'
})
export class PopoverView {

  deleteItemCallback;
    
  constructor( private events: Events, private params: NavParams){
      this.deleteItemCallback = this.params.get('deleteTravel')
    }

    deleteItem(){
        this.deleteItemCallback();
    }

    editItem(){
        this.events.publish('item:edit');
    }
}

