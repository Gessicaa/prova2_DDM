import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPedidoModalPage } from './novo-pedido-modal.page';

describe('NovoPedidoModalPage', () => {
  let component: NovoPedidoModalPage;
  let fixture: ComponentFixture<NovoPedidoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoPedidoModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoPedidoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
