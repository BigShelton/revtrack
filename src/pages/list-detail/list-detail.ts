import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RequestQuotePage } from '../request-quote/request-quote';
import { BusinessDetailPage } from '../business-detail/business-detail';


/**
 * Generated class for the ListDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

/*@IonicPage()*/
@Component({
  selector: 'page-list-detail',
  templateUrl: 'list-detail.html',
})
export class ListDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListDetailPage');
  }

  routeToQuotePage(){
    this.navCtrl.push(RequestQuotePage);
  }

  routeToBusinessDetailPage(){
    this.navCtrl.push(BusinessDetailPage);
  }

}
