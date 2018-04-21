import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QModalPage } from './q-modal';

@NgModule({
  declarations: [
    QModalPage,
  ],
  imports: [
    IonicPageModule.forChild(QModalPage),
  ],
})
export class QModalPageModule {}
