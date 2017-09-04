import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LocationAutoCompleteProvider } from '../../providers/location-autocomplete/location-autocomplete';
import { AutoCompleteComponent } from 'ionic2-auto-complete'
@Component({
  selector: 'new-travel',
  templateUrl: 'new-travel.html'
})
export class NewTravel
{

  @ViewChild('searchFrom') searchFrom: AutoCompleteComponent;
  @ViewChild('searchTo') searchTo: AutoCompleteComponent;

  name: string = '';
  locationFrom: string;
  locationTo: string;

  constructor(public navCtrl: NavController, 
              private storage: Storage,
              public alertCtrl: AlertController, 
              public locationAutoComplete: LocationAutoCompleteProvider)
  {
  }

  saveTravel() {
    if (this.name.trim() == '') {
      let alert = this.alertCtrl.create({
        title: 'Nuevo Recorrido',
        subTitle: 'Ingrese nombre del recorrido',
        buttons: ['Aceptar']
      });
      alert.present();

      return;
    }
    
    var searchFromSelection = this.searchFrom.getSelection();

    if (!searchFromSelection) {
      let alert = this.alertCtrl.create({
        title: 'Nuevo Recorrido',
        subTitle: 'Ingrese ubicación de origen',
        buttons: ['Aceptar']
      });
      alert.present();

      return;
    }

    var searchToSelection = this.searchTo.getSelection();
    
     if (!searchToSelection) {
      let alert = this.alertCtrl.create({
        title: 'Nuevo Recorrido',
        subTitle: 'Ingrese ubicación de destino',
        buttons: ['Aceptar']
      });
      alert.present();

      return;
    }

    this.storage.set(new Date().getTime().toString(), {
                    name: this.name, 
                    locationFrom: JSON.stringify(searchFromSelection), 
                    locationTo: JSON.stringify(searchToSelection)
                  });
    this.navCtrl.pop();
  }

}
