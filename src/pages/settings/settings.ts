import { Component } from '@angular/core';
import { NavController, Events, NavParams, Popover, PopoverController } from 'ionic-angular';
import { NewTravel } from '../new-travel/new-travel';
import { MyTravels } from '../my-travels/my-travels';
import { PopoverView } from '../popover-view/popover-view'
import { TravelOptions } from '../travel-options/travel-options'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class Settings {
  private proximity: number;

  constructor(
    public navCtrl: NavController,
    private storage: Storage) {
    this.storage.get('settings').then((val) => {
      this.proximity = val ? val.proximity : 4;
    });
  }

  onChangeProximity($event) {
    this.storage.set("settings",
      {
        proximity: this.proximity
      });
  }
}