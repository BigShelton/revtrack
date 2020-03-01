import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { WhereToPage } from '../where-to/where-to';

declare var google:any;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild('map') mapRef: ElementRef;
  constructor(public navCtrl: NavController,
              public actionSheetController: ActionSheetController) {

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

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      
      buttons: [{
        text: 'Where to?',
        role: 'destructive',
        icon: 'location',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Favorites',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  goToWhereToPage() {
    this.navCtrl.push(WhereToPage);
  }

}
