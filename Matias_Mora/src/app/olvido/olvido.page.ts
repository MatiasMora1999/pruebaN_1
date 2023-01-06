import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-olvido',
  templateUrl: './olvido.page.html',
  styleUrls: ['./olvido.page.scss'],
})
export class OlvidoPage{

  constructor(private alertcontroller2: AlertController) { }

  async presentAlert(){
    const alert = await this.alertcontroller2.create({
      header: 'Si los datos coinciden recibiras tu correo',
      buttons: ['Ok!'],
    });
    await alert.present();
  }
}
