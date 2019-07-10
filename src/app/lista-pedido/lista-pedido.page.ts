import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
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

  constructor(public modalController: ModalController, public toastController: ToastController, public storage: Storage) { 
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
    this.storage.set('TAREFAS_KEY', this.pedidos);

    //# Cria o toast
    const toast = await this.toastController.create({
      message: 'Nova tarefa cadastrada com sucesso!',
      duration: 5000,
      position: 'top'
    });

    //# Exibir a mensagem na tela
    toast.present();
  }
}
