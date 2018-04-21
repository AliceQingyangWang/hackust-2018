import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { QModalPage } from '../q-modal/q-modal';  
import { QuestionsPage } from '../questions/questions';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  questionsPage = QuestionsPage
  
  temp = {category: "social" }

  constructor(public navCtrl: NavController, public modal : ModalController) {
  }

  openModal() {
    let myQModal = this.modal.create(QModalPage);
    myQModal.present();
  }
}
