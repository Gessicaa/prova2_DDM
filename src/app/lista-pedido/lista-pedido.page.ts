import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { NovoPedidoModalPage } from '../novo-pedido-modal/novo-pedido-modal.page';


@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.page.html',
  styleUrls: ['./lista-pedido.page.scss'],
})
export class ListaPedidoPage implements OnInit {

  title = "Lista de pedidos";
  pedidos = [];
  PEDIDOS_KEY = 'pedidos'

  constructor(public modalController: ModalController, public toastController: ToastController, public storage: Storage, public alertController: AlertController) { 
    this.storage.get('PEDIDOS_KEY').then((data) => {
      if (data) {

        this.pedidos = data;
      }
    });
  }

  ngOnInit() {
  }

  async add(pedido) {
    this.pedidos.push(pedido);
    this.storage.set('PEDIDOS_KEY', this.pedidos);

    const toast = await this.toastController.create({
      message: 'Novo pedido cadastrado com sucesso!',
      duration: 5000,
      position: 'top'
    });
    toast.present();
  }

  async exibir_modal(NovoPedidoModalPage) {
    const modal = await this.modalController.create({
      component: NovoPedidoModalPage
    });

    await modal.present();

    modal.onDidDismiss().then((retorno) => {
      this.add(retorno.data);
    });

  }

  async excluir(pedido) {

    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Deseja excluir o pedido?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => { }
        },
        {
          text: 'Sim',
          handler: async () => {
            var i = this.pedidos.indexOf(pedido);
            this.pedidos.splice(i, 1);
            this.storage.set('PEDIDOS_KEY', this.pedidos)
          
            const toast = await this.toastController.create({
              message: ' Pedido excluido com sucesso!',
              duration: 5000,
              position: 'top'
            });
            toast.present();

          }

        }
      ]
    });

    await alert.present();
  }

  
}
