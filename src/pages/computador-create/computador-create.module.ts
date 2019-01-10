import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComputadorCreatePage } from './computador-create';

@NgModule({
  declarations: [
    ComputadorCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ComputadorCreatePage),
  ],
})
export class ComputadorCreatePageModule {}
