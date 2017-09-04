import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { Settings } from '../settings/settings';
import { MyTravels } from '../my-travels/my-travels';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MyTravels;
  tab2Root = Settings;
  tab3Root = ContactPage;

  constructor() {

  }
}
