import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage} from '../pages/login/login';
import { ListDetailPage } from '../pages/list-detail/list-detail';
import { RequestQuotePage } from '../pages/request-quote/request-quote';
import { BusinessDetailPage } from '../pages/business-detail/business-detail';
import { WhereToPage } from '../pages/where-to/where-to';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    LoginPage,
    ListDetailPage,
    HomePage,
    TabsPage,
    RequestQuotePage,
    BusinessDetailPage,
    WhereToPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    LoginPage,
    ContactPage,
    ListDetailPage,
    HomePage,
    TabsPage,
    RequestQuotePage,
    BusinessDetailPage,
    WhereToPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
