import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Computador } from '../../Model/computador.dto';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComputadorService } from '../../Services/computador.service';



@IonicPage()
@Component({
  selector: 'page-computador-update',
  templateUrl: 'computador-update.html',
})
export class ComputadorUpdatePage {

  computador: Computador;
  formGroup: FormGroup;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public computadorService : ComputadorService,
    public alertController: AlertController) {


    this.computador = this.navParams.get('computador');
    if (this.computador == undefined) {
      this.navCtrl.setRoot('ComputadoresPage');
    }

    this.formGroup = this.formBuilder.group({
      id: [this.computador.id],
      ativo: [this.computador.ativo],
      tipo: [this.computador.tipo],
      isRecepcao: [this.computador.isRecepcao],
      unidade: [this.computador.unidade],
      setor: [this.computador.setor],
      colaborador: [this.computador.colaborador],
      usaAntiVirus: [this.computador.usaAntiVirus],
      usaCardio: [this.computador.usaCardio],
      usaPiramide: [this.computador.usaPiramide],
      usaQlikView: [this.computador.usaQlikView],
      fabricante: [this.computador.fabricante],
      modelo: [this.computador.modelo],
      processador: [this.computador.processador],
      ram: [this.computador.ram],
      hd: [this.computador.hd],
      sistemaOperacional: [this.computador.sistemaOperacional],
      office: [this.computador.office]
    });

  }

  alterarComputador(){
    console.log('teste');
    let computador: Computador = {
      id: this.formGroup.value.id,
      ativo: this.formGroup.value.ativo,
      tipo: this.formGroup.value.tipo,
      isRecepcao: this.formGroup.value.isRecepcao,
      unidade: this.formGroup.value.unidade,
      setor: this.formGroup.value.setor,
      colaborador: this.formGroup.value.colaborador,
      usaAntiVirus: this.formGroup.value.usaAntiVirus,
      usaCardio: this.formGroup.value.usaCardio,
      usaPiramide: this.formGroup.value.usaPiramide,
      usaQlikView: this.formGroup.value.usaQlikView,
      fabricante: this.formGroup.value.fabricante,
      modelo: this.formGroup.value.modelo,
      processador: this.formGroup.value.processador,
      ram: this.formGroup.value.ram,
      hd: this.formGroup.value.hd,
      sistemaOperacional: this.formGroup.value.sistemaOperacional,
      office: this.formGroup.value.office,
    }
    this.computadorService.updateComputador(computador)
      .subscribe(response => {
          console.log(response);
          this.showInsertOk();
          
      })
  }

  showInsertOk() {
    let alert = this.alertController.create({
      title: 'Sucesso!',
      message: 'Alteração efetuado com sucesso!',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'ok',
          handler: () => {
            this.navCtrl.setRoot('ComputadoresPage');
          }
        }
      ]
    });
    alert.present();
  }
}
