import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Computador } from '../../Model/computador.dto';
import { ComputadorService } from '../../Services/computador.service';

/**
 * Generated class for the ComputadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-computadores',
  templateUrl: 'computadores.html',
})
export class ComputadoresPage {

  public computadores : Computador[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public computadorService : ComputadorService) {

  }

  ionViewDidLoad() {
    this.computadorService.findAll()
      .subscribe(response => {
        this.computadores = response;
        console.log(this.computadores);
        
      })
  }

  openDetail(){
    console.log("open detail")
  }

}
