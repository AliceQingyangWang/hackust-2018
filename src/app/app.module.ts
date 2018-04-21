import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QModalPage } from '../pages/q-modal/q-modal';
import { QuestionsPage } from '../pages/questions/questions';
import { QuestionDetailsPage } from '../pages/question-details/question-details';
import { QFetcherProvider } from '../providers/q-fetcher/q-fetcher';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QModalPage,
    QuestionsPage,
    QuestionDetailsPage
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
    QuestionDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QFetcherProvider
  ]
})
export class AppModule {}
