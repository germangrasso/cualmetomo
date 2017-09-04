import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewTravel } from '../new-travel/new-travel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  addTravel(){
     this.navCtrl.push(NewTravel);
  }

}
