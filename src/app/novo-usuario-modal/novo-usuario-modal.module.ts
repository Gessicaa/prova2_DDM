import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NovoUsuarioModalPage } from './novo-usuario-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NovoUsuarioModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NovoUsuarioModalPage]
})
export class NovoUsuarioModalPageModule {}
