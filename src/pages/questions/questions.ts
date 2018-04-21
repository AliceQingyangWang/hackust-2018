import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionDetailsPage } from '../question-details/question-details';
/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {
  category : string
  questions : any[]
  qDetailsPage : QuestionDetailsPage
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.questions = [];
    for(var i = 0; i < 10; i++) {
      this.questions.push({
        title: "This is question : " + i,
        date: new Date(),
        body: "Project Ubin project-ubin. Project Ubin is a MAS- and ABS-led effort with the financial industry and technology partners to experiment on the use of DLT for inter-bank payments."
      });
    }
    this.category = this.navParams.get('category');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }

  openQDetailsPage(q : any) {
    console.log("From Questions: ", q);
    this.navCtrl.push(QuestionDetailsPage, {'question': q});
  }
}
