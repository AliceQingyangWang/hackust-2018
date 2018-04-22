import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionDetailsPage } from '../question-details/question-details';
import { QFetcherProvider } from '../../providers/q-fetcher/q-fetcher';

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {
  category : string
  icon: string
  NavCo: string
  questions : any[]
  qDetailsPage : QuestionDetailsPage
  constructor(public navCtrl: NavController, public navParams: NavParams, private qFetcher : QFetcherProvider) {
    this.category = this.navParams.get('category');
	this.icon = this.navParams.get('icon');
	this.NavCo = this.navParams.get('navco');
    this.questions = this.qFetcher.getQs(this.category);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }

  openQDetailsPage(q : any) {
    console.log("From Questions: ", q);
    this.navCtrl.push(QuestionDetailsPage, {'question': q});
  }
}
