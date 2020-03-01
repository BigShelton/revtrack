import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WhereToPage } from '../where-to/where-to';

declare var google:any;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  @ViewChild('map') mapRef: ElementRef;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.DisplayMap();
  }

  DisplayMap() {
    const location = new google.maps.LatLng('-25.975300','28.118870');

    const options = {
      center:location,
      zoom:10
    };


    const map = new google.maps.Map(this.mapRef.nativeElement,options);


  }

  goToWhereToPage() {
    this.navCtrl.push(WhereToPage);
  }

}
