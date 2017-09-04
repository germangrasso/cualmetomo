import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http'
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MyTravels } from '../pages/my-travels/my-travels';
import { PopoverView } from '../pages/popover-view/popover-view'
import { TabsPage } from '../pages/tabs/tabs';
import { NewTravel } from '../pages/new-travel/new-travel';
import { TravelOptions } from '../pages/travel-options/travel-options';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { MoviServiceProvider } from '../providers/movi-service/movi-service';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { LocationAutoCompleteProvider } from '../providers/location-autocomplete/location-autocomplete';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewTravel,
    PopoverView,
    TravelOptions,
    MyTravels
  ],
  imports: [
    BrowserModule,
    AutoCompleteModule,    
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewTravel,
    PopoverView,
    TravelOptions,
    MyTravels
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoviServiceProvider,
    LocationAutoCompleteProvider
  ]
})
export class AppModule {}
