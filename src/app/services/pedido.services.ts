import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  URL_BASE = 'https://5d262d00eeb36400145c59b3.mockapi.io/pedido'

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(this.URL_BASE);
  }

  
  
}
