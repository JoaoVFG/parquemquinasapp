import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Computador } from '../../Model/computador.dto';


@IonicPage()
@Component({
  selector: 'page-computer-detail',
  templateUrl: 'computer-detail.html',
})
export class ComputerDetailPage {

  computador : Computador;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.computador = this.navParams.get('computador');
    if(this.computador == undefined){
      this.navCtrl.setRoot('ComputadoresPage');
    }
    console.log(this.computador);
    
  }

  ionViewDidLoad() {
    
  }

}
