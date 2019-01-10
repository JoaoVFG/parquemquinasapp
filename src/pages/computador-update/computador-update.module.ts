import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComputadorUpdatePage } from './computador-update';

@NgModule({
  declarations: [
    ComputadorUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(ComputadorUpdatePage),
  ],
})
export class ComputadorUpdatePageModule {}
