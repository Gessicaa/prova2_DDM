import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NovoPedidoModalPage } from './novo-pedido-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NovoPedidoModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NovoPedidoModalPage]
})
export class NovoPedidoModalPageModule {}
