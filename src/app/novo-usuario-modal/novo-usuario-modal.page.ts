import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-novo-usuario-modal',
  templateUrl: './novo-usuario-modal.page.html',
  styleUrls: ['./novo-usuario-modal.page.scss'],
})
export class NovoUsuarioModalPage implements OnInit {

  constructor(public modalController: ModalController, private camera: Camera) { }

  ngOnInit() {
  }

  novo_usuario = {
    "nome": "",
    "imagem": ""
  }

  add() {
    this.modalController.dismiss(this.novo_usuario);
  }

  take_picture() {
    const options: CameraOptions = {
      quality: 20,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.novo_usuario.imagem = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      alert(err);
    });

  }
}
