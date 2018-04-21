import { Component } from '@angular/core';
import { CategoryPage } from '../category/category';
import { NavController, ModalController } from 'ionic-angular';
import { QModalPage } from '../q-modal/q-modal';  

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  categoryPage = CategoryPage;

  constructor(public navCtrl: NavController, public modal : ModalController) {
  }

  openModal() {
    let myQModal = this.modal.create(QModalPage);
    myQModal.present();

  }
}
