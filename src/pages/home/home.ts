import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { QuestionListPage } from '../question-list/question-list';
import { QModalPage } from '../q-modal/q-modal';  

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	questionList = QuestionListPage;
	
  constructor(public navCtrl: NavController, public modal : ModalController) {
  }

  openModal() {
    let myQModal = this.modal.create(QModalPage);
    myQModal.present();

  }
}
