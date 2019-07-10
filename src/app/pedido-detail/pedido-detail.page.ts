import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedido-detail',
  templateUrl: './pedido-detail.page.html',
  styleUrls: ['./pedido-detail.page.scss'],
})
export class PedidoDetailPage implements OnInit {

  detail;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.detail = this.route.snapshot.paramMap.get('detail');
  }

}
