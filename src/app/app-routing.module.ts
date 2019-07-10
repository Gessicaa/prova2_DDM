import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'lista-pedido', loadChildren: './lista-pedido/lista-pedido.module#ListaPedidoPageModule' },
  { path: 'novo-pedido-modal', loadChildren: './novo-pedido-modal/novo-pedido-modal.module#NovoPedidoModalPageModule' },
  { path: 'pedido-detail/:detail', loadChildren: './pedido-detail/pedido-detail.module#PedidoDetailPageModule' },
  { path: 'novo-usuario-modal', loadChildren: './novo-usuario-modal/novo-usuario-modal.module#NovoUsuarioModalPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
