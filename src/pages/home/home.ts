import { Component } from '@angular/core';
import { CategoryPage } from '../category/category';
import { NavController, ModalController } from 'ionic-angular';
import { QuestionListPage } from '../question-list/question-list';
import { QModalPage } from '../q-modal/q-modal';  
import { QuestionsPage } from '../questions/questions';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  questionsPage = QuestionsPage
  
  temp = {category: "social" }

	questionList = QuestionListPage;
	categoryPage = CategoryPage;
  constructor(public navCtrl: NavController, public modal : ModalController) {
  }

  openModal() {
    let myQModal = this.modal.create(QModalPage);
    myQModal.present();
  }
}
