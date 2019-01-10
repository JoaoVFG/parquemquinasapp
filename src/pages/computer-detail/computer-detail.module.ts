import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComputerDetailPage } from './computer-detail';

@NgModule({
  declarations: [
    ComputerDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ComputerDetailPage),
  ],
})
export class ComputerDetailPageModule {}
