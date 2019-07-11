import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-novo-pedido-modal',
  templateUrl: './novo-pedido-modal.page.html',
  styleUrls: ['./novo-pedido-modal.page.scss'],
})
export class NovoPedidoModalPage implements OnInit {

  constructor(public modalController: ModalController,) { }
  
  novo_pedido = {
    "prato":"",
    "data":"",
    "tamanho":"",
    "valor":""
  }
  
  ngOnInit() {
  }

  
  add() {
    this.modalController.dismiss(this.novo_pedido);
  }

}
