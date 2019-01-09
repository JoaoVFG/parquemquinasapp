import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComputadoresPage } from './computadores';

@NgModule({
  declarations: [
    ComputadoresPage,
  ],
  imports: [
    IonicPageModule.forChild(ComputadoresPage),
  ],
})
export class ComputadoresPageModule {}
