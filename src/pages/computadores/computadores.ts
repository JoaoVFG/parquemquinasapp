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
  public computadoresExibicao : Computador[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public computadorService : ComputadorService) {

  }

  ionViewDidLoad() {
    this.computadorService.findAll()
      .subscribe(response => {
        this.computadores = response;
        this.computadoresExibicao = this.computadores;

      })
  }

  openDetail(){

  }

  getItems(ev) {
    // Reset items back to all of the items


    // set val to the value of the ev target
    var val = ev.target.value;
    
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.computadoresExibicao = this.computadores.filter((computador) => {
        return (computador.ativo.toString().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.computadoresExibicao = this.computadores;

    }
  }

}
