import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  constructor(private alertCtr: AlertController) { }

  async alerta(){
    const alerta = await this.alertCtr.create({
      header:'Usuario registrado',
      buttons: ['OK!'],
    });
    await alerta.present();
  }

  ngOnInit() {
  }

}
