import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Computador } from '../../Model/computador.dto';
import { ComputadorService } from '../../Services/computador.service';


@IonicPage()
@Component({
  selector: 'page-computadores',
  templateUrl: 'computadores.html',
})
export class ComputadoresPage {

  public computadores: Computador[];
  public computadoresExibicao: Computador[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public computadorService: ComputadorService,
    private alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    this.buscaComputador();
  }

  openDetail(computador: Computador) {
    this.navCtrl.push('ComputerDetailPage', { 'computador': computador })
  }

  alertDeletaComputador(id: string) {
    let alert = this.alertCtrl.create({
      title: 'Remover Computador',
      message: 'Deseja Realmente remover esse computador?',
      buttons: [
        {
          text: 'Sim',
          role: 'deletarComputador',
          handler: () => {
            this.deletarComputador(id);
          }
        },
        {
          text: 'Não',
          handler: () => {
            console.log('Computador não foi deletado' + id);
          }
        }
      ]
    });
    alert.present();

  }

  deletarComputador(id : string){
    this.computadorService.deleteComputador(id)
      .subscribe(response =>{
        this.buscaComputador;
      }, error =>{
      });
  }

  alterarComputador(computador : Computador){
    this.navCtrl.push('ComputadorUpdatePage', { 'computador': computador })
  }

  buscaComputador(){
    this.computadorService.findAll()
      .subscribe(response => {
        this.computadores = response;
        this.computadoresExibicao = this.computadores;
      })
  }

  getItems(ev) {
    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.computadoresExibicao = this.computadores.filter((computador) => {
        return (computador.ativo.toString().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.computadoresExibicao = this.computadores;
    }
  }

}
