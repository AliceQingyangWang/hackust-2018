import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CategoryPage } from '../pages/category/category';
import { QModalPage } from '../pages/q-modal/q-modal';
import { QuestionsPage } from '../pages/questions/questions';
import { QuestionDetailsPage } from '../pages/question-details/question-details';
import { QuestionListPage } from '../pages/question-list/question-list';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QModalPage,
    QuestionsPage,
    QuestionDetailsPage,
	  QuestionListPage,
    CategoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QModalPage,
    QuestionsPage,
    QuestionDetailsPage,
	  QuestionListPage,
    CategoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
