import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NovoUsuarioModalPage } from '../novo-usuario-modal/novo-usuario-modal.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarios = []

  constructor(public modalController: ModalController, private storage: Storage) {
    this.storage.get('usuario').then((usuario) => {
      if (usuario) {
        this.usuarios = usuario
      }
    })
  }

  add(usuario) {
    this.usuarios.push(usuario)
    this.storage.set('usuario', this.usuarios)
  }

  async abrir_modal() {
    let modal = await this.modalController.create({
      component: NovoUsuarioModalPage
    });

    modal.onDidDismiss().then((usuario) => {
      this.add(usuario.data);
    });

    await modal.present();

  }

}
