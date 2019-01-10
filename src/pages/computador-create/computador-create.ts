import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComputadorService } from '../../Services/computador.service';
import { Computador } from '../../Model/computador.dto';

/**
 * Generated class for the ComputadorCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-computador-create',
  templateUrl: 'computador-create.html',
})
export class ComputadorCreatePage {
  formGroup: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public computadorService: ComputadorService,
    public alertController: AlertController) {
    this.formGroup = this.formBuilder.group({
      id: [''],
      ativo: [''],
      tipo: [''],
      isRecepcao: ['NÃO'],
      unidade: [''],
      setor: [''],
      colaborador: [''],
      usaAntiVirus: ['NÃO'],
      usaCardio: ['NÃO'],
      usaPiramide: ['NÃO'],
      usaQlikView: ['NÃO'],
      fabricante: [''],
      modelo: [''],
      processador: [''],
      ram: [''],
      hd: [''],
      sistemaOperacional: [''],
      office: ['NENHUM']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComputadorCreatePage');
  }

  cadastrarComputador() {
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
    console.log(computador);
    this.computadorService.insertComputador(computador)
      .subscribe(response => {
          console.log(response)
          this.showInsertOk();
      },
      error =>{
        console.log(error);
      })
  }


  showInsertOk() {
    let alert = this.alertController.create({
      title: 'Sucesso!',
      message: 'Cadastro efetuado com sucesso!',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'ok',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }
}
