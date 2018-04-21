import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {ItemDetailsPage} from '../item-details/item-details';

/**
 * Generated class for the QuestionListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question-list',
  templateUrl: 'question-list.html',
})
export class QuestionListPage {
  selectedItem: any;
  items: Array<{ title: string, note: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
      });
    }
  }
  /*
  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }	
*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionListPage');
  }

}
