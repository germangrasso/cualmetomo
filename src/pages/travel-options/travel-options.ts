import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'travel-options',
  templateUrl: 'travel-options.html'
})
export class TravelOptions {
  travel: any;
  constructor(public navCtrl: NavController, private navParms: NavParams) {
    this.travel = this.navParms.get('travel');
  }

 
}
