import { Component } from '@angular/core';
import { ListDetailPage } from'../list-detail/list-detail';

import {
  NavController,
  NavParams,
  ToastController
} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  public constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController
  ) {}

  routeToListDetail(){
    this.navCtrl.push(ListDetailPage);
  }

}
