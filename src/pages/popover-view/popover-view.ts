import { Component } from '@angular/core';
import { NavController, Events,NavParams,  Popover, PopoverController } from 'ionic-angular';
import { NewTravel } from '../new-travel/new-travel';
import { TravelOptions } from '../travel-options/travel-options'
import { Storage } from '@ionic/storage';

@Component({
    templateUrl: './popover-view.html'
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
