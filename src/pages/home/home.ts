import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComputadorService } from '../../Services/computador.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public computador: ComputadorService) {

                computador.findAll()
                  .subscribe(responseComputador =>{
                    console.log(responseComputador);
                  },
                  error => {
                    console.log(error);
                  })

  }

}
