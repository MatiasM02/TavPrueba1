import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recu-contra',
  templateUrl: './recu-contra.page.html',
  styleUrls: ['./recu-contra.page.scss'],
})
export class RecuContraPage implements OnInit {

  constructor(private alertCtr: AlertController) { }

  async alerta(){
    const alerta = await this.alertCtr.create({
      header: 'Si los datos coinciden recibirás tu correo',
      buttons: ['OK!'],
    });
    await alerta.present();
  }

  ngOnInit() {
  }

}
