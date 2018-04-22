import { Component } from '@angular/core';
import { CategoryPage } from '../category/category';
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

	categoryPage = CategoryPage;
  constructor(public navCtrl: NavController, public modal : ModalController) {
  }

  openModal() {
    let myQModal = this.modal.create(QModalPage);
    myQModal.present();
  }

  openQuestionsPage(c : string, i:string, co:string) {
    this.navCtrl.push(QuestionsPage, {category: c,icon: i, navco:co});
  }
}
